import { BaseLayout } from '../layouts/Base.layout';
import React, { useState } from 'react';
import { CollectionType } from '../../types/collection.type';
import { CollectionsLayout } from '../layouts/Collections.layout';
import { Collection } from '../Collection.component';
import { Modal } from '../Modal.component';
import { Card } from '../cards/Card.component';
import { NotificationModalLayout } from '../layouts/NotificationModal.layout';
import { subscribeToCollection } from '../../lib/api/mutations/subscribe-to-collection.mutation';

export const CollectionsTemplate: React.FC<CollectionsTemplateProps> = ({
  collections
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState(0);
  const openNotificationModel = collectionId => {
    setSelectedCollection(collectionId);
    setShowModal(true);
  };
  const onClose = () => {
    setShowModal(false);
  };
  const onLogin = async (userEmail: string, accepts_terms: boolean) => {
    console.log(userEmail, accepts_terms)
    if (accepts_terms) {
      await subscribeToCollection({
        userEmail,
        collectionId: selectedCollection
      });
    }
    console.log("got here")
    setShowModal(false);
  };
  return (
    <BaseLayout title="Collections">
      <CollectionsLayout>
        {collections.map((c, index) => (
          <Collection
            openNotificationModel={openNotificationModel}
            data={c}
            key={c.id}
          />
        ))}
      </CollectionsLayout>
      <Modal show={showModal}>
        <Card>
          <NotificationModalLayout
            collectionName={
              collections.find(c => c.id === selectedCollection)?.name
            }
            onClose={onClose}
            onLogin={onLogin}
          />
        </Card>
      </Modal>
    </BaseLayout>
  );
};

interface CollectionsTemplateProps {
  /**
   * Collections data
   */
  collections: CollectionType[];
}
