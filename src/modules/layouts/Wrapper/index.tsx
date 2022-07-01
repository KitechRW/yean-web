import React from 'react';

const Wrapper = ({
  className = '',
  children = <div />,
}: {
  className?: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className={`flex flex-col items-center w-full ${className}`}>
      <div className="w-full xl:max-w-screen-2xl flex flex-col h-full relative">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
