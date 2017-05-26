import React from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import './index.css';



export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props);

  }

  static defaultProps = {
    offset: 0
  }

  static propTypes = {
    offset: PropTypes.number
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }



  render() {
  }
}
