import { GraphQLClient } from '../client';
import { gql } from '@apollo/client';

export const getCollections = async ({}) => {
  try {
    const response = await GraphQLClient.query({
      query: gql`
        query getCollections {
          collections {
            id
            name
            launch_date
          }
        }
      `
    });

    if (!response?.data) {
      return { statusCode: 500 };
    }

    return { statusCode: 200, ...response.data };
  } catch (error) {
    const statusCode =
      error?.graphQLErrors?.[0]?.extensions?.response?.statusCode || 500;
    console.error(JSON.stringify(error));
    return { statusCode };
  }
};
