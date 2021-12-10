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

it('fetches user', async () => {
  const result = await server.executeOperation({
    query: gql`
      query Usuario($id: String!) {
        Usuario(_id: $id) {
          correo
        }
      }
    `,
    variables: {
      id: '61a1150c351c7c00e8eb0be9',
    },
  });

  assert.equal(result.data.Usuario.correo, 'test@test.com');
});

it('creates user', async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation CrearUsuario(
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
          _id
        }
      }
    `,
    variables: {
      nombre: 'Daniel',
      apellido: 'Saldarriaga',
      identificacion: '1234234',
      correo: 'dsaldarriaga@prevalentware.com',
      rol: 'ADMINISTRADOR',
      password: '12345',
    },
  });

  assert.notEqual(result.data.CrearUsuario, null);
});
