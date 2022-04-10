import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const NotificationModalLayout: React.FC<
  NotificationModalLayoutProps
> = ({ collectionName, onClose }) => {
  return (
    <div className="flex flex-col space-y-4 w-96">
      <div className="inline-flex justify-between items-center">
        <p>
          Get reminded about{' '}
          <span className="font-medium">{collectionName}</span>
        </p>
        <FontAwesomeIcon
          onClick={() => onClose()}
          key="first"
          icon={faTimes}
          className="text-white bg-stone-200 hover:bg-stone-300 text-slate-800 p-1 w-6 h-6 shadow-inner rounded-full inline-flex items-center"
        />
      </div>
      <div className="inline-flex flex-col space-y-0.5">
        <label className="text-xs">EMAIL*</label>
        <input className="bg-stone-100 appearance-none border border-stone-400 w-full p-1" />
      </div>
      <div className="inline-flex pt-2">
        <label className="text-xs">AGREE TO OUR TERMS AND CONDITIONS</label>
        <input type="checkbox"/>
      </div>
    </div>
  );
};

interface NotificationModalLayoutProps {
  /**
   * Handle close modal
   */
  onClose: () => void;

  /**
   * Collections name
   */
  collectionName: string;
}
