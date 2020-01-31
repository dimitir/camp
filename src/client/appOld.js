import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import './app.css';


import ReactImage from './img/react.png';
import Header from './components/header/header';


export default class App extends Component {
  constructor() {
    super();
    this.state = { username: null };

  }

  async componentDidMount() {
    let res = await fetch('/api/getUsername');
    res = await res.json();
    console.log(res);
    this.setState({ username: res.username });
  }

  render() {
    const { username } = this.state;
    return (
      <Router>
        <Header />
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <p>works</p>
        <img src={ReactImage} alt="react" />
      </Router>
    );
  }
}
