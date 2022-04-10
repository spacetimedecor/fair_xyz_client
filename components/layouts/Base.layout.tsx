import React from 'react';
import { PageTemplate } from '../pages/Page.template';

export const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <>
      <PageTemplate title={title}>{children}</PageTemplate>
    </>
  );
};

interface BaseLayoutProps {
  /**
   * The content/page title
   */
  title: string;

  /**
   * Children
   */
  children: React.ReactNode;
}
