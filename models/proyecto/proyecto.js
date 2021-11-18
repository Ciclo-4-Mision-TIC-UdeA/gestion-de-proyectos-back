import mongoose from 'mongoose';
const { Schema, model } = mongoose;
// import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo } from '../enums/enums';
// import { ObjectiveModel } from '../objective';
import { UserModel } from '../usuario/usuario.js';

// interface Proyecto {
//   nombre: string;
//   presupuesto: number;
//   fechaInicio: Date;
//   fechaFin: Date;
//   estado: Enum_EstadoProyecto;
//   fase: Enum_FaseProyecto;
//   lider: Schema.Types.ObjectId;
//   objetivos: [{ descripcion: String; tipo: Enum_TipoObjetivo }];
// }

const projectSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    enum: ['ACTIVO', 'INACTIVO'],
    default: 'INACTIVO',
  },
  fase: {
    type: String,
    enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
    default: 'NULO',
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: ['GENERAL', 'ESPECIFICO'],
        required: true,
      },
    },
  ],
});

const ProjectModel = model('Proyecto', projectSchema);

export { ProjectModel };
