import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
    };
  }

  render() {
    return (
      <div id="home">
        <div id="created">Created by Joanna Makary for CineSend</div>
        <div className="home-star">
          <div className="subtitle">Welcome to my</div>
          <h1 className="star-wars">Star Wars</h1>
          <div className="subtitle">React App!</div>
          <Link to="/characters" className="shadow">
            <div id="enter-btn">View Characters</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
