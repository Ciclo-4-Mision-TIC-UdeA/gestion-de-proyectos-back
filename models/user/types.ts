import { gql } from 'apollo-server-express';

const userTypes = gql`
  scalar Date

  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_Rol {
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
  }

  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }

  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULO
  }

  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }

  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }

  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String!): Usuario
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario
  }
`;

export { userTypes };
