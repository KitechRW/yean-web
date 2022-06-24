import React from 'react';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';

const Scaffold = ({ className = '', children = <div /> }) => {
  return (
    <div
      className={`relative min-h-screen flex flex-col w-full overflow-y-auto overflow-x-hidden ${className}`}
    >
      <Header />
      <div className="flex flex-col w-full flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Scaffold;
