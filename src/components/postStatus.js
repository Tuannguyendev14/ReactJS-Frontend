import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
import FormPost from './formPost';

export default class PostStatus extends Component {

  render() {
    return (
      <div>
        <Header />
        <br /> <br /> <br />

        <FormPost />

        <br /><br />

        <Footer />
      </div>
    );
  }
}