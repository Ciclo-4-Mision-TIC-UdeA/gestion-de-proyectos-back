import { ProjectModel } from '../models/project';
import { UserModel } from '../models/user';

const resolvers = {
  Query: {
    Usuarios: async (parent, args) => {
      const users = await UserModel.find();
      return users;
    },
    Usuario: async (parent, args) => {
      const user = await UserModel.findById(args._id);
      return user;
    },
    Proyectos: async (parent, args) => {
      const projects = await ProjectModel.find().populate('lider');
      return projects;
    },
  },

  Mutation: {
    crearUsuario: async (parent, args) => {
      const user = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        rol: args.rol,
        estado: args.estado,
      });
      return user;
    },
  },
};

export default resolvers;
