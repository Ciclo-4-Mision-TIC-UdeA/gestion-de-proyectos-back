import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './db/db';

import types from './graphql/types';
import resolvers from './graphql/resolvers';

import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
});
const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT }, async () => {
  await connectDB();
  await server.start();
  server.applyMiddleware({ app });

  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
});
