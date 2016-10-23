import React, { Component } from 'react';
import API from '../api.js'

export default class App extends Component {

  componentWillMount() {
    API.getCompany('twilio');
  }

  render() {
    return (
      <h1 className="text-center">Welcome to React!</h1>
    )
  }
}
