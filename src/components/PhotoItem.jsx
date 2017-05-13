import React from 'react';

const PhotoItem = ({ photo }) => {
  const imageUrl = photo.images.standard_resolution.url,
  title = photo.caption.text,
  link = photo.link

  return (
    <li>
      <a href={link} target="_blank">
        <img
          src={imageUrl}
          alt={title}
         />
      </a>
    </li>
  );
}

export default PhotoItem;
