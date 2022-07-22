import Image, { ImageProps } from 'next/image';
import React from 'react';

const CustomImage = (props: ImageProps) => {
  const { alt } = props;
  const errorImage = '/assets/images/placeholder.png';
  const [src, setSrc] = React.useState(props.src);

  React.useEffect(() => {
    setSrc(props.src);
  }, [props.src]);

  if (!src) {
    return null;
  }

  let imageUrl = `${src}`;

  if (
    imageUrl.slice(0, 1) !== '/' &&
    imageUrl.slice(0, 3) !== 'http'
  ) {
    imageUrl = `/${src}`;
  }

  return (
    <Image
      {...props}
      alt={alt}
      src={imageUrl}
      onError={() => {
        setSrc(errorImage);
      }}
      onLoadingComplete={result => {
        if (result.naturalWidth === 0) {
          setSrc(errorImage);
        }
      }}
    />
  );
};

export default CustomImage;
