import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import conectarBD from './db/db.js';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const getUser = (token) => {
  console.log('tkn', token);
  if (token) {
    const dt = jwt.verify(token.split('Bearer ')[1], 'secreto', (err, data) => {
      //FALTA CAPTURA DE ERROR DE JWT Y DE SPLIT
      return data;
    });
    return { user: dt, authorized: true };
  } else return null;
};

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization;

    const context = getUser(token);

    return { context };
  },
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });

  console.log('servidor listo');
});
