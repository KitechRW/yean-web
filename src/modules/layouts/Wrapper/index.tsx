import React from 'react';

const Wrapper = ({ className = '', children = <div /> }) => {
  return (
    <div
      className={`flex flex-col items-center w-full px-4 ${className}`}
    >
      <div className="w-full xl:max-w-6xl flex flex-col h-full relative">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
