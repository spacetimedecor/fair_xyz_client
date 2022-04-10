import { CollectionsTemplate } from '../components/templates/Collections.template';
import { getCollections } from '../lib/api/queries/get-collections.query';
import React from 'react';
import { CollectionType } from '../types/collection.type';

const Home: React.FC<IHomepage> = ({ collections }) => {
  return <CollectionsTemplate collections={collections} />;
};

export default Home;

interface IHomepage {
  collections: CollectionType[];
}

export async function getStaticProps() {
  const { statusCode, collections } = await getCollections({});
  if (collections) {
    return {
      props: {
        collections
      }
    };
  }

  if (statusCode === 404) {
    return {
      notFound: true
    };
  }

  throw new Error(statusCode);
}
