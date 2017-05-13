import React, { Component } from 'react';
import $ from 'jquery';

import Album from './Album';

const TOKEN = '2129469216.1677ed0.c0d6c587bb8b4623ab79c43fa624749d';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };

  }

  componentDidMount() {
    var token = TOKEN,
    num_photos = 10;

    $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: num_photos},
      success:function(res){
         this.setState({ photos: res.data });
         console.log(this.state.photos);
       }.bind(this),
      error: function(data){
        console.log(data);
      }
    });
  }

  render() {
    return (
      <div>
        <Album photos={ this.state.photos } />
      </div>
    );
  }
}
