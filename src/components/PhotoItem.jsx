import React from 'react';
import $ from 'jquery';
import {GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/action/favorite-border';

const TOKEN = process.env.REACT_APP_TOKEN;

const PhotoItem = ({ photo }) => {
  const imageUrl = photo.images.standard_resolution.url,
        username = photo.user.username,
        link = photo.link,
        id = photo.id

  let description = "";
  try {
    description = photo.caption.text;
  }
  catch(err) {
    description = "...";
  }

  const like = () => {
    const token = TOKEN;
    $.ajax({
      type: 'post',
      url: `https://api.instagram.com/v1/media/${id}/likes`,
      data: {
        access_token: token,
        method: 'POST',
      },
      dataType: 'json',
      success: res => console.log(res.meta.code),
      error: data => console.log(data),
    });
  };

  return (
    <GridTile
      key={id}
      title={description}
      subtitle={<span>by <b>{username}</b></span>}
      actionIcon={<IconButton onClick={like} ><StarBorder color="white" /></IconButton>}

    >
      <img src={imageUrl} alt={description}/>
    </GridTile>
  );
}

export default PhotoItem;
