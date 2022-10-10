import SomethingWentWrong from 'modules/_partials/SomethingWentWrong';
import React from 'react';

const DataWidget = ({
  isLoading,
  isError,
  children,
}: {
  isLoading: boolean;
  isError: any;
  children: JSX.Element;
}) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <SomethingWentWrong />;
  }
  return children;
};

export default DataWidget;
