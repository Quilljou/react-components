import React from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import './index.css';
import BlurImage from '../BlurImage/';


function scrollHandler() {
  const doc = document.body ? document.body : document.documentElement;
  const node = ReactDom.findDOMNode()

}

function getElementTop(element) {
  var actualTop = element.offsetTop;
  var current = element.offsetParent;

  while(current !== null) {
    actualTop += current.offsetTop;
    current = current.offsetParent;
  }
  return actualTop;
}


export default class LazyLoad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      startLoad: false
    }

    this.scrollHandler = this.scrollHandler.bind(this);
  }

  static defaultProps = {
    offset: 0
  }

  static propTypes = {
    offset: PropTypes.number
  }

  scrollHandler() {
    if(this.checkVisible()) {
      this.setState({
        startLoad: true
      })
    }
  }

  checkVisible() {
    const doc = document.body.scrollTop ? document.body : document.documentElement;
    const node = ReactDom.findDOMNode(this);

    const windowTop = getElementTop(node); // 距离文档顶部距离
    const scrollTop = doc.scrollTop; //窗口滚动距离
    const offset = this.props.offset; // 用户偏移量

    if(scrollTop + offset > windowTop) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    if(this.checkVisible()) {
      this.setState({
        startLoad: true
      })
    }
    window.addEventListener('scroll',this.scrollHandler);
    window.addEventListener('resize',scrollHandler);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.scrollHandler);
    window.removeEventListener('resize',this.scrollHandler);
  }



  render() {
    let BlurImageProps = this.props;

    let { startLoad } = this.state;
    BlurImageProps = { ...BlurImageProps, startLoad };
    return (
      <div>
        <BlurImage {...BlurImageProps}></BlurImage>
      </div>
    )
  }
}
