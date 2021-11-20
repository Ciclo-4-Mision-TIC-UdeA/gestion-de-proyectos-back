import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarBD from './db/db.js';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import jwt from 'jsonwebtoken';
import { validateToken } from './utils/tokenUtils.js';

dotenv.config();

const getUser = (token) => {
  if (token) {
    //FALTA CAPTURA DE ERROR DE JWT Y DE SPLIT
    const dt = validateToken(token.split(' ')[1]);
    return { user: dt, authorized: true };
  } else return null;
};

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;
    const auth = getUser(token);

    return { auth };
  },
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });
});
