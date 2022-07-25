import DrawerLayout from 'modules/layouts/DrawerLayout';
import React from 'react';
import CustomImage from '../CustomImage';

const ImagePreview = ({
  children,
  src,
  title,
}: {
  children: any;
  src: string;
  title: string;
}) => {
  const [toggle, setToggle] = React.useState(false);
  if (!src) {
    return null;
  }
  return (
    <DrawerLayout toggle={toggle} setToggle={setToggle} title={title}>
      {children}
      <div className="flex flex-col w-full">
        <CustomImage
          src={src}
          width="600"
          height="500"
          objectFit="contain"
        />
      </div>
    </DrawerLayout>
  );
};

export default ImagePreview;
