import DrawerLayout from 'modules/layouts/DrawerLayout';
import React from 'react';
import './css.module.css';
import ViewBook from './ViewBook';

const PDFPreview = ({
  children,
  src,
  title,
}: {
  children: any;
  src: string;
  title: string;
}) => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <DrawerLayout toggle={toggle} setToggle={setToggle} title={title}>
      {children}
      <div className="flex flex-col">
        <ViewBook src={src} />
      </div>
    </DrawerLayout>
  );
};

export default PDFPreview;
