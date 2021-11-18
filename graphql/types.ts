import { gql } from 'apollo-server-express';
import { UserModel } from '../models/user';

const typeDefs = gql`
  scalar Date

  enum Enum_Rol {
    ESTUDIANTE
    LIDER 
    ADMINISTRADOR
  }

  enum Enum_EstadoUsuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }

  enum Enum_EstadoProyecto {
    ACTIVO
    INACTIVO
  }

  enum Enum_FaseProyecto {
    INICIADO
    DESARROLLO
    TERMINADO
    NULA
  }

  enum Enum_TipoObjetivo {
    GENERAL
    ESPECIFICO
  }

  enum Enum_EstadoInscripcion {
    ACEPTADA
    RECHAZADA
  }

  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    correo: String!
    identificacion: String!
    rol: Enum_Rol!
    estado: Enum_EstadoUsuario
  }

  type Objetivo{
    _id: ID!
    descripcion: String!
    tipo:Enum_TipoObjetivo!
  }

  type Proyecto {
    _id: ID
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    fase: Enum_FaseProyecto!
    estado: Enum_EstadoProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String): Usuario
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
      estado: Enum_EstadoUsuario
    ): Usuario
    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      correo: String!
      identificacion: String!
      rol: Enum_Rol!
      estado: Enum_EstadoUsuario
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      fase: Enum_FaseProyecto!
      estado: Enum_EstadoProyecto!
      lider: String!
      objetivos: String
    ): Proyecto
  }

`;

export default typeDefs;
