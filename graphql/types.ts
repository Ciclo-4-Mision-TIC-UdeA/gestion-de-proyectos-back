import { gql } from 'apollo-server-express';
import { UserModel } from '../models/user';

const typeDefs = gql`
  scalar Date

  enum Role {
    Estudiante
    Lider
    Administrador
  }

  enum ProjectStatus {
    Activo
    Inactivo
  }

  enum ProjectPhase {
    Iniciado
    En
    Desarrollo
    Terminado
  }

  type User {
    _id: ID!
    name: String!
    lastName: String!
    email: String!
    document: String!
    role: Role!
    status: String!
  }

  type Project {
    _id: ID
    name: String!
    budget: Float!
    startDate: Date!
    finishDate: Date
    projectStatus: ProjectStatus!
    projectPhase: ProjectPhase!
    leader: User!
  }

  type Query {
    Users: [User]
    User(_id: ID!): User
    Projects: [Project]
  }

  type Mutation {
    createUser(
      name: String!
      lastName: String!
      email: String!
      document: String!
      role: Role!
      status: String!
    ): User
    updateUser(
      name: String!
      lastName: String!
      email: String!
      document: String!
      role: String!
      status: String!
    ): User
    deleteUser(id: ID!): User
  }
`;

export default typeDefs;
