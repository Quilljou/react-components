import React, { Component } from 'react';
import notification from '../../components/Notification/index';

export default class NotificationPage extends Component {
  newNotification() {
    notification({
      message: 'halo',
      title:'title'
    });
  }

  render() {
    return (
      <div >
        <button onClick={this.newNotification}>new Notification</button>
      </div>
    );
  }
}
