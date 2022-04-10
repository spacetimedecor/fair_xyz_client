import React from 'react';
import Head from 'next/head';

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  children
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export interface PageTemplateProps {
  /**
   * Page title tag
   */
  title: string;

  /**
   * Children
   */
  children: React.ReactNode;
}
