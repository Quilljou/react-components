import React from 'react';
import './index.css';
import propTypes from 'prop-types';

export default class BackTop extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };

    this.move = this.move.bind(this);
  }

  static defaultProps = {
    offset: 50,
    size: 50
  }

  static propTypes = {
    offset: propTypes.number,
    size: propTypes.number
  }

  move = () => {
    const scrollTop = document.documentElement.scrollTop + document.body.scrollTop;

    if( scrollTop > this.props.offset) {
      this.show()
    }else {
      this.hide()
    }
  }
  componentDidMount() {
    window.addEventListener('scroll',this.move);
    window.addEventListener('resize',this.move);
  }

  componentWillUnmoun() {
    window.removeEventListener('scroll',this.move);
    window.removeEventListener('resize',this.move);
  }

  hide () {
    this.setState({
      visible: false
    })
  }

  show () {
    this.setState({
      visible: true
    })
  }


  render ()  {
    const {visible} = this.state;
    const toTop = (rate) => {
      var doc = document.body ? document.body : document.documentElement;
      var scroll = doc.scrollTop;

      if(!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(fn) {
          setTimeout(fn,1000 / 60);
        }
      }

      const top = function () {
        scroll = scroll + (0 - scroll) / (rate || 2);
        if(scroll < 1) {
          doc.scrollTop = 0;
          return;
        }
        doc.scrollTop = scroll;
        requestAnimationFrame(top);
      }

      top();
    }

    return (
      <div onClick={() => toTop()}>
        {
          visible
          ?
            this.props.children
            ?
              this.props.children
            :
              <div  className="to-top" style={{ width: this.props.size, height: this.props.size }}>
                    <svg viewBox="0 0 1024 1024"  style={{ width: this.props.size * 0.5, height: this.props.size * 0.5 }}>
                      <path d="M83.617 654.65c-26.262 26.265-26.262 68.847 0.003 95.112 26.258 26.265 68.847 26.265 95.112 0l292.187-292.19c11.76-9.185 26.285-14.298 41.362-14.298 15.078 0 29.604 5.116 41.366 14.301l291.626 291.627c26.265 26.265 68.847 26.265 95.112 0 26.266-26.265 26.266-68.847 0-95.112l-380.548-380.548c-12.612-12.613-29.718-19.697-47.556-19.697-17.839 0-34.944 7.084-47.558 19.696l-381.107 381.108z" fill="#111111">
                      </path>
                    </svg>
              </div>
          :
          null
        }
      </div>

    )
  }
}
