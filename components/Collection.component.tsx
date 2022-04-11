import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Card } from './cards/Card.component';
import { CollectionType } from '../types/collection.type';

export const Collection: React.FC<CollectionProps> = ({
  data: { launch_date, name, id },
  openNotificationModel
}) => {
  const formattedDate: string | null = useMemo(
    () => (launch_date ? new Date(launch_date).toDateString() : 'TBD'),
    [launch_date]
  );

  return (
    <Card className="hover:drop-shadow-2xl hover:cursor-pointer">
      <div className="inline-flex items-center justify-between space-x-8">
        <div className="text-xl font-bold text-stone-400">{name}</div>
        <button
          className="bg-stone-200 hover:bg-stone-300 text-slate-800 p-2 shadow-inner rounded-full inline-flex items-center"
          onClick={() => openNotificationModel(id)}
        >
          <FontAwesomeIcon key="first" icon={faBell} className="text-white" />
        </button>
      </div>
      <p className="text-stone-400 text-sm">{formattedDate}</p>
    </Card>
  );
};

interface CollectionProps {
  /**
   * Open notification modal
   */
  openNotificationModel: (collectionId: number) => void;

  /**
   * The collection data
   */
  data: CollectionType;
}
