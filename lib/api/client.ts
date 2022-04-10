import { ApolloClient, InMemoryCache } from '@apollo/client';
const endpoints = {
  develop: 'http://localhost:3000/graphql'
};

export const GraphQLClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: endpoints[process.env.APP_ENV]
});
