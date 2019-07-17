import React, { Component } from 'react';

import Header from './../Layouts/header';
import Footer from './../Layouts/footer';
import FormPost from './formPost';

export default class PostStatus extends Component {

  render() {
    var { history } = this.props;
    return (
      <div>
        <Header />
        <br /> <br /> <br />

        <FormPost history={history} />

        <br /><br />

        <Footer />
      </div>
    );
  }
}