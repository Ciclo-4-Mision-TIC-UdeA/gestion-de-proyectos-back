import { userResolvers } from '../models/user/resolvers';
import { projectResolvers } from '../models/project/resolvers';

export const resolvers = [userResolvers, projectResolvers];
