import { GraphQLClient } from '../client';
import { gql } from '@apollo/client';

export const subscribeToCollection = async ({ userEmail, collectionId }) => {
  try {
    console.log('starting mutation');
    const response = await GraphQLClient.mutate({
      variables: {
        userEmail,
        collectionId
      },
      mutation: gql`
        mutation createNotification($userEmail: String!, $collectionId: Float!) {
          createNotification(
            userCollectionNotificationData: {
              userEmail: $userEmail
              collectionId: $collectionId
            }
          ) {
            userId
            collectionId
            user {
              email
              id
            }
            collection {
              name
              id
              launch_date
            }
          }
        }
      `
    });
    console.log(response);
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
