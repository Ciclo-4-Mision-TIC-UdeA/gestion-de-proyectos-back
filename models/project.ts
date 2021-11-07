import { Schema, model } from 'mongoose';
import { Enum_ProjectPhase, Enum_ProjectStatus } from './enums';
import UserModel from './user';

interface Project {
  name: string;
  budget: number;
  startDate: Date;
  finishDate: Date;
  projectStatus: Enum_ProjectStatus;
  projectPhase: Enum_ProjectPhase;
  leader: Schema.Types.ObjectId;
}

const ProjectSchema = new Schema<Project>({
  name: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  finishDate: {
    type: Date,
    required: true,
  },
  projectStatus: {
    type: String,
    enum: Enum_ProjectStatus,
    default: Enum_ProjectStatus.inactivo,
  },
  projectPhase: {
    type: String,
    enum: Enum_ProjectPhase,
    default: Enum_ProjectPhase.null,
  },
  leader: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
  },
});

const ProjectModel = model('Project', ProjectSchema);

export default ProjectModel;
