const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const pathModule = require('path');
const gql = require('graphql-tag');
const glob = require('glob');
const cors = require('cors');

const envPath = `${process.cwd().replace('/server', '')}/.env`;
require('dotenv').config({ path: envPath });

const startServer = async () => {
  /**
   * Starting mongoose: I'm using it with the sole purpose of providing a connection to mongo
   *
   */
  const mongoURL = process.env.MONGODB_URI;
  mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
  await new Promise((res) => {
    const db = mongoose.connection;
    db.on('error', () => process.exit(42));
    db.once('open', res);
  });
  /**
   * Starting Apollo Server
   */
  // _empty is here not to raise errors (empty type is forbidden)
  const Query = gql`
    type Query {
      _empty: String
    }
  `;
  const Mutation = gql`
    type Mutation {
      _empty: String
    }
  `;
  const typeDefs = [Query, Mutation];
  const resolvers = { Query: {}, Mutation: {} };
  // Auto discovery of *.js files inside resolvers directory
  // Huge advantage, no risk of forgetting to declare any new resolver here because we don't need to anymore
  glob.sync('graphql/*.js').forEach(function (file) {
    console.log(`GraphQL resolver file detected: ${file}`);
    const { typeDef, resolvers: fileResolvers } = require(pathModule.resolve(file));
    typeDefs.push(typeDef);
    if (fileResolvers.Query) {
      resolvers.Query = { ...resolvers.Query, ...fileResolvers.Query };
    }
    if (fileResolvers.Mutation) {
      resolvers.Mutation = { ...resolvers.Mutation, ...fileResolvers.Mutation };
    }
  });
  const path = '/graphql';
  const server = new ApolloServer({ typeDefs, resolvers });

  /**
   * Starting express & then serving
   */
  const app = express();
  server.applyMiddleware({ app, path });
  app.use(cors());

  const PORT = process.env.SERVER_PORT || 9000;
  app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
};

startServer();
