import React, { Component } from 'react';
import './NotificationTray.scss';
import Icon from '../Icon/Icon';

class NotificationTray extends Component {

  render () {
    
    let hamburgerClasses = ['Header__hamburger'];
    if (this.props.isMenuOpen) {
      hamburgerClasses.push('Header__hamburger--open');
    }

    return (
      <div className="NotificationTray">
        <Icon icon="fa-bell"></Icon>
      </div>
    );
  }
}

export default NotificationTray;
