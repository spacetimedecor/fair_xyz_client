import React from 'react';

export const Modal: React.FC<ModalProps> = ({ children, show }) => {
  return (
    <>
      <div
        className={`${
          show ? '' : 'hidden'
        } fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-stone-800 opacity-50 flex flex-col items-center justify-center`}
      />

      <div
        className={`${
          show ? '' : 'hidden'
        } fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex flex-col items-center justify-center`}
      >
        {children}
      </div>

    </>
  );
};

interface ModalProps {
  /**
   * Show / hide
   */
  show: boolean;

  /**
   * Children
   */
  children: React.ReactNode;
}
