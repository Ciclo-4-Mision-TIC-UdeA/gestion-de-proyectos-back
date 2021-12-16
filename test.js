import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import { gql } from 'apollo-server-express';
import { ApolloServer } from 'apollo-server-express';
import conectarBD from './db/db.js';
import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();
await conectarBD();

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
});

it('creates user', async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation Mutation(
        $nombre: String!
        $apellido: String!
        $identificacion: String!
        $correo: String!
        $rol: Enum_Rol!
        $password: String!
      ) {
        crearUsuario(
          nombre: $nombre
          apellido: $apellido
          identificacion: $identificacion
          correo: $correo
          rol: $rol
          password: $password
        ) {
          correo
        }
      }
    `,
    variables: {
      nombre: 'test',
      apellido: 'test',
      identificacion: 'test',
      correo: 'testing@testing.com',
      rol: 'ADMINISTRADOR',
      password: 'test',
    },
  });

  assert.equal(result.data.crearUsuario.correo, 'testing@testing.com');
});

it('fetches user', async () => {
  const result = await server.executeOperation({
    query: gql`
      query Usuarios($filtro: FiltroUsuarios) {
        Usuarios(filtro: $filtro) {
          correo
        }
      }
    `,
    variables: {
      filtro: {
        correo: 'testing@testing.com',
      },
    },
  });

  assert.equal(result.data.Usuarios.length, 1);

  assert.equal(result.data.Usuarios[0].correo, 'testing@testing.com');
});

it('deletes user', async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation EliminarUsuario($correo: String) {
        eliminarUsuario(correo: $correo) {
          correo
        }
      }
    `,
    variables: {
      correo: 'testing@testing.com',
    },
  });
  assert.equal(result.data.eliminarUsuario.correo, 'testing@testing.com');
});

it('fetches user after deletion', async () => {
  const result = await server.executeOperation({
    query: gql`
      query Usuarios($filtro: FiltroUsuarios) {
        Usuarios(filtro: $filtro) {
          correo
        }
      }
    `,
    variables: {
      filtro: {
        correo: 'testing@testing.com',
      },
    },
  });

  assert.equal(result.data.Usuarios.length, 0);
});
