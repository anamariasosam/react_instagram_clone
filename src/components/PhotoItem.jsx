import React from 'react';

const PhotoItem = ({ photo }) => {
  const imageUrl = photo.images.standard_resolution.url,
        link = photo.link

  let description = "";
  try {
    description = photo.caption.text;
  }
  catch(err) {
    description = "...";
  }

  return (
    <li>
      <a href={link} target="_blank">
        <img
          src={imageUrl}
          alt={description}
         />
      </a>
    </li>
  );
}

export default PhotoItem;
