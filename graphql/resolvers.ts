import ProjectModel from '../models/project';
import UserModel from '../models/user';

//nm

const resolvers = {
  Query: {
    Users: async (parent, args) => {
      const users = await UserModel.find();
      return users;
    },
    User: async (parent, args) => {
      const user = await UserModel.findById(args._id);
      return user;
    },
    Projects: async (parent, args) => {
      const projects = await ProjectModel.find().populate('leader');
      return projects;
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await UserModel.create({
        name: args.name,
        lastName: args.lastName,
        document: args.document,
        email: args.email,
        role: args.role,
      });
      return user;
    },
  },
};

export default resolvers;
