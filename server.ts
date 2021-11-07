import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import connectDB from './db/db';

import types from './graphql/types';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
});
const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: 4000 }, async () => {
  await connectDB();
  await server.start();
  server.applyMiddleware({ app });

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
