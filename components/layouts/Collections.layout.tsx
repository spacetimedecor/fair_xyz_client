import React from 'react';

export const CollectionsLayout: React.FC<CollectionsLayoutProps> = ({
  children
}) => {
  return (
    <div className="justify-center items-center bg-stone-200 p-4 rounded-lg shadow-inner shadow-gray-200">
      {children}
    </div>
  );
};

interface CollectionsLayoutProps {
  /**
   * Children
   */
  children: React.ReactNode;
}
