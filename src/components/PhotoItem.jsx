import React from 'react';

const PhotoItem = ({ photo }) => {
  const imageUrl = photo.images.standard_resolution.url;
  const title = photo.caption.text
  const link = photo.link

  return (
    <li
      className="list-group-item">
      <div className="photo-list media">
        <div className="media-left">
          <a href={link} target="_blank">
            <img
              src={imageUrl}
              alt={title}
              className="media-object"
             />
          </a>
        </div>

        <div className="media-body">
          <div className="media-heading">
            { title }
          </div>
        </div>
      </div>
    </li>
  );
}

export default PhotoItem;
