import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlurImage from './components/BlurImage/'
import LazyLoad from './components/LazyLoad/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false
    }
  }
  render() {
    const loadBigImage = () => {
      this.setState(
        {isLoaded: true}
      )
    };

    return (
      <div className="App">
        <button onClick={loadBigImage}>start Load real image</button>
        <LazyLoad
          placeholder="http://placehold.it/10x10" imgSrc="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
          ></LazyLoad>
        <div style={{"width": "500px"}}>
          <BlurImage
            placeholder="https://cdn-images-1.medium.com/freeze/max/27/1*sg-uLNm73whmdOgKlrQdZA.jpeg?q=20"
            imgSrc="https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg"
            startLoad={this.state.isLoaded}
            style={{
              backgroundImage: 'url("http://www.fillmurray.com/10/10")'
            }}
            blur={10}
          />
        </div>
      </div>
    );
  }
}

export default App;
