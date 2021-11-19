import { UserModel } from '../../models/usuario/usuario.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const resolversAutenticacion = {
  Mutation: {
    registro: async (parent, args) => {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(args.password, salt);

        const usuarioCreado = await UserModel.create({
          nombre: args.nombre,
          apellido: args.apellido,
          identificacion: args.identificacion,
          correo: args.correo,
          password: hashedPassword,
          rol: args.rol,
        });

        return {
          token: jwt.sign(
            {
              _id: usuarioCreado._id,
              nombre: usuarioCreado.nombre,
              apellido: usuarioCreado.apellido,
              identificacion: usuarioCreado.identificacion,
              correo: usuarioCreado.correo,
              rol: usuarioCreado.rol,
            },
            'secreto'
          ),
        };
      } catch (e) {
        return {
          error: e,
        };
      }
    },
  },
};

export { resolversAutenticacion };
