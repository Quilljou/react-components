import React, { Component } from 'react';
import { Link } from 'react-router';
// import BlurImage from './components/BlurImage/'
// import LazyLoad from './components/LazyLoad/'

class Home extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
          <ul>
            <li>
              <Link to="/blurimage">BlurImage</Link>
            </li>
            <li>
              <Link to="/lazyload">LazyLoad</Link>
            </li>
            <li>
              <Link to="/backtotop">BackToTop</Link>
            </li>
          </ul>
      </div>
    );
  }
}

export default Home;
