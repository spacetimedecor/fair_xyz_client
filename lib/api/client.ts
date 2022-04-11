import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { HttpLink } from 'apollo-link-http';

// const endpoints = {
//   development: 'http://localhost:3000/graphql'
// };

export const GraphQLClient = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:3000/graphql' // Server URL (must be absolute)
  }),
  cache: new InMemoryCache(),
});
