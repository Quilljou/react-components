// inspired by https://jmperezperez.com/medium-image-progressive-loading-placeholder/
import React from 'react';
import PropTypes from 'prop-types'
import './index.css';


class BlurImage extends React.Component {
  constructor() {
    super();
    this.state = {
      bigImageLoaded: false,
      smallImageLoaded: false
    }

  }
  render() {
    const getRatioStyle  = () => {
      const { ratio } = this.props;
      const w = ratio.split(':')[0];
      const h = ratio.split(':')[1];

      return {
        paddingBottom: h / w * 100 + '%'
      }
    }

    const loadSmallImage = () => {
      this.setState({
        smallImageLoaded: true
      })
    }

    const loadBigImage = () => {
      this.setState({
        bigImageLoaded: true
      })
    }

    const {smallImageLoaded, bigImageLoaded } = this.state;
    let { placeholder, imgSrc, startLoad, style, blur } = this.props;
    const ratioStyle = getRatioStyle()
    const smallStyle = {
      filter: `blur(${blur}px)`
    }


    return (
      <div className="blurImage" style={style}>
        <img
          src={placeholder}
          alt=""
          className={ 'small ' + (smallImageLoaded ? 'loaded' : '')} onLoad={loadSmallImage}
          style={smallStyle}
        />
        <div
          style={ratioStyle}></div>
        {
          startLoad
          ?
          <img
            src={imgSrc}
            alt=""
            onLoad={loadBigImage} className={bigImageLoaded ? 'loaded' : ''}/>
          :
          null
        }
      </div>
    )
  }
}

BlurImage.propTypes = {
  placeholder: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  stratLoad: PropTypes.bool,
  style: PropTypes.object, // can set the background
  ratio: PropTypes.string,
  blur: PropTypes.number
}

BlurImage.defaultProps = {
  ratio: "3:2",
  blur: 50
}

export default BlurImage;
