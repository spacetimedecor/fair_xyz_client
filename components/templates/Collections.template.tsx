import { BaseLayout } from '../layouts/Base.layout';
import React, { useState } from 'react';
import { CollectionType } from '../../types/collection.type';
import { CollectionsLayout } from '../layouts/Collections.layout';
import { Collection } from '../Collection.component';
import { Modal } from '../Modal.component';
import { Card } from '../cards/Card.component';
import { NotificationModalLayout } from '../layouts/NotificationModal.layout';

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
            collectionName={collections.find(c => c.id === selectedCollection).name}
            onClose={onClose}
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
