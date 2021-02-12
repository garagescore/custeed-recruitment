/* Template file to define a new Apollo GraphQL query */
/* Read _README.txt, copy this file, rename the copy, don't forget the extension */
const gql = require('graphql-tag');

const typeDef = gql`
  extend type Query {
    resolverName: ReturnType
  }

  type ReturnType {
    field: String
  }
`;

const resolvers = {
  Query: {
    async resolverName() {
      return { field: 'test' };
    },
  },
};

module.exports = { typeDef, resolvers };
