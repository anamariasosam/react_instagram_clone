import React from 'react';

import PhotoItem from './PhotoItem';

const Album = ({ photos }) => {
  const photoItems = photos.map( (photo) => {
    return(
      <PhotoItem
        photo={ photo }
        key={ photo.id }
      />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      { photoItems }
    </ul>
  );
}

export default Album;
