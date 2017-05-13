import React, { Component } from 'react';
import $ from 'jquery';

import Album from './Album';

const TOKEN = process.env.REACT_APP_TOKEN;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };

  }

  componentDidMount() {
    const token = TOKEN,
    num_photos = 10;

    $.ajax({
      url: 'https://api.instagram.com/v1/users/self/media/recent',
      dataType: 'jsonp',
      type: 'GET',
      data: {access_token: token, count: num_photos},
      success: (res) => {
        this.setState({ photos: res.data });
      },
      error: (data) => console.log(data)
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
