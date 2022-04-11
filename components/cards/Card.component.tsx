import React from 'react';

export const Card: React.FC<CardProps> = props => {
  const { children, className } = props;

  return (
    <div
      className={`rounded shadow-stone-200 drop-shadow p-4 max-w-lg max-h-md bg-stone-100 flex flex-col items-left space-y-2 mt-4 first:mt-0 ${
        className ?? ''
      }`}
    >
      {children}
    </div>
  );
};

interface CardProps {
  /**
   * Extra CSS classes
   */
  className?: string;

  /**
   * Children
   */
  children: React.ReactNode;
}
