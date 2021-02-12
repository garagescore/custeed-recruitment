/* Template file to define a new Apollo GraphQL query */
/* Read _README.txt, copy this file, rename the copy, don't forget the extension */
const gql = require('graphql-tag');

const typeDef = gql`
  extend type Query {
    hello: ReturnType
  }

  type ReturnType {
    msg: String
  }
`;

const resolvers = {
  Query: {
    async hello() {
      return { msg: 'hello' };
    },
  },
};

module.exports = { typeDef, resolvers };
