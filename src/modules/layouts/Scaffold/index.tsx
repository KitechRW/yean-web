import React from 'react';
import Header from 'modules/_partials/Header';
import Footer from 'modules/_partials/Footer';
import Wrapper from '../Wrapper';

const Scaffold = ({
  className = '',
  children = <div />,
}: {
  className?: string;
  children: any;
}) => {
  return (
    <div
      className={`relative min-h-screen flex flex-col w-full overflow-y-auto overflow-x-hidden ${className}`}
    >
      <Header />
      <Wrapper className="flex-grow">{children}</Wrapper>
      <Footer />
    </div>
  );
};

export default Scaffold;
