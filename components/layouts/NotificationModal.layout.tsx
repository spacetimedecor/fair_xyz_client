import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const NotificationModalLayout: React.FC<
  NotificationModalLayoutProps
> = ({ collectionName, onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [accepts_terms, setAcceptsTerms] = useState(false);

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
        <input
          required
          placeholder="test@test.com"
          type="email"
          className="bg-stone-100 appearance-none border border-stone-400 w-full p-1"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </div>
      <div className="inline-flex pt-2 items-center">
        <label className="text-xs mr-2">
          AGREE TO OUR TERMS AND CONDITIONS
        </label>
        <input
          className="h-3 w-3 border border-stone-400 rounded-0 bg-stone-100 hover:bg-stone-300 focus:outline-none cursor-pointer"
          type="checkbox"
          checked={accepts_terms}
          onChange={() => setAcceptsTerms(!accepts_terms)}
        />
      </div>
      <div className="pt-2 w-full border-b border-stone-400" />
      <div className="inline-flex items-end w-full">
        <button
          className="border border-stone-400 ml-auto w-32 bg-stone-100 hover:bg-stone-300 text-slate-800 py-1 rounded-lg inline-flex items-center"
          onClick={() => onLogin(email, accepts_terms)}
        >
          <span className="text-sm mx-auto font-medium">LOGIN</span>
        </button>
      </div>
    </div>
  );
};

interface NotificationModalLayoutProps {
  /**
   * Handle login modal
   */
  onLogin: (email, accepts_terms) => void;

  /**
   * Handle close modal
   */
  onClose: () => void;

  /**
   * Collections name
   */
  collectionName: string;
}
