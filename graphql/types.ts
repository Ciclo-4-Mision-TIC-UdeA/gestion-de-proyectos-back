import { gql } from 'apollo-server-express';
import { UserModel } from '../models/user';

const typeDefs = gql`
  scalar Date

  enum Enum_Rol {
    estudiante
    lider
    administrador
  }

  enum Enum_EstadoUsuario {
    pendiente
    autorizado
    no_autorizado
  }

  enum Enum_EstadoProyecto {
    activo
    inactivo
  }

  enum Enum_FaseProyecto {
    iniciado
    desarrollo
    terminado
    nula
  }

  enum Enum_TipoObjetivo {
    general
    especifico
  }

  enum Enum_EstadoInscripcion {
    aceptada
    rechazada
  }

  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    correo: String!
    identificacion: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario!
  }

  type Proyecto {
    _id: ID
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date
    fase: Enum_FaseProyecto!
    estado: Enum_EstadoProyecto!
    lider: Usuario!
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: ID!): Usuario
    Proyectos: [Proyecto]
    Proyecto(_id: ID!): Proyecto
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      correo: String!
      identificacion: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario!
    ): Usuario
    actualizarUsuario(
      nombre: String!
      apellido: String!
      correo: String!
      identificacion: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario!
    ): Usuario
    eliminarUsuario(id: ID!): Usuario
  }
`;

export default typeDefs;
