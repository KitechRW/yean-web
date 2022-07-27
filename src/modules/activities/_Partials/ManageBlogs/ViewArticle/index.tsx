import React from 'react';
import DrawerLayout from 'modules/layouts/DrawerLayout';
import CustomImage from 'modules/_partials/CustomImage';

const ViewBlog = ({
  data,
  children,
}: {
  data: any;
  children: any;
}) => {
  const [toggle, setToggle] = React.useState(false);
  const textRef = React.useRef(null);

  React.useEffect(() => {
    if (textRef.current) {
      // @ts-ignore
      textRef.current.innerHTML = data?.text;
    }
  }, [data?.text]);
  return (
    <DrawerLayout
      title={`View Article`}
      toggle={toggle}
      setToggle={setToggle}
    >
      {children}
      <div className="flex flex-col">
        <CustomImage
          src={data?.image}
          width={'400px'}
          height={'200px'}
          loading="lazy"
          className="rounded-t-lg"
        />
        <h1 className="text-base font-bold">{data?.title}</h1>
        <div ref={textRef} className="mt-3" />
      </div>
    </DrawerLayout>
  );
};

export default ViewBlog;
