import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol, Enum_TipoObjetivo } from './models/enums';
import { ProjectModel } from './models/project';
import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objective';

const main = async () => {
  await conectarBD();

  // const objet = await ObjectiveModel.create({
  //   descripcion: 'Este es el objetivo especifico',
  //   tipo: Enum_TipoObjetivo.especifico,
  // });

  // ProjectModel.create({
  //   nombre: 'Proyecto 2',
  //   presupuesto: 120,
  //   fechaInicio: Date.now(),
  //   fechaFin: new Date('2022/11/10'),
  //   lider: '618ac12a2fb091af1782732b',
  //   objetivos: ['618c146e8b21e4e8dc979e83', '618c148a42073e2513ec7dab'],
  // });

  const proyecto = await ProjectModel.find({ nombre: 'Proyecto 2' })
    .populate('lider')
    .populate('objetivos');
  console.log('el proyecto es: ', JSON.stringify(proyecto));

  // const lider = await UserModel.find({ _id: proyecto[0].lider });

  // console.log('el lider del proyecto es: ', lider);
};

main();

// CRUD USUARIOS

// CREAR UN USUARIO
// await UserModel.create({
//   apellido: 'Saldarriaga',
//   correo: 'lksk.dflcccc.com@',
//   identificacion: '123456789',
//   nombre: 'daniel',
//   rol: Enum_Rol.administrador,
// })
//   .then((u) => {
//     console.log('usuario creado', u);
//   })
//   .catch((e) => {
//     console.error('Error creando el usuario', e);
//   });

// OBTENER LOS USUARIOS
// await UserModel.find()
//   .then((u) => {
//     console.log('usuarios', u);
//   })
//   .catch((e) => {
//     console.error('error obteniendo los usuarios', e);
//   });

// OBTENER UN SOLO USUARIO
// await UserModel.findOne({ identificacion: '16546' })
//   .then((u) => {
//     console.log('usuario encontrado', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// EDITAR UN USUARIO
// await UserModel.findOneAndUpdate(
//   { correo: 'dsl@cc.com' },
//   {
//     nombre: 'Juan',
//     apellido: 'López',
//   }
// )
//   .then((u) => {
//     console.log('usuario actualizado', u);
//   })
//   .catch((e) => {
//     console.error('Error actualizando', e);
//   });

// ELIMINAR UN USUARIO
// await UserModel.findOneAndDelete({ correo: 'dsl@cc.com' })
//   .then((u) => {
//     console.log('usuario eliminado: ', u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });
