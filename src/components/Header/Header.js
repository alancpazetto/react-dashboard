import React, { Component } from 'react';
import './Header.scss';
import Input from '../Forms/Input/Input';
import Icon from '../Icon/Icon';
import NotificationTray from '../NotificationTray/NotificationTray';

class Header extends Component {

  render () {
    
    let hamburgerClasses = ['Header__hamburger'];
    if (this.props.isMenuOpen) {
      hamburgerClasses.push('Header__hamburger--open');
    }

    return (
      <div className="Header">
        <div className={hamburgerClasses.join(' ')}>
          <svg onClick={() => this.props.onClickHamburger()} version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 15" width="36" height="15">
            <path d="M0 2.75L20.67 2.75L20.67 4.75L0 4.75L0 2.75Z" id="first-line"></path>
            <path d="M0 10.25L35.7 10.25L35.7 12.25L0 12.25L0 10.25Z" id="second-line"></path>
          </svg>
        </div>
        <div className="Header__search">
          <Input
            prefix={<Icon icon="fa-search"></Icon>}
            placeholder="What you looking for?"></Input>
        </div>
        <div className="Header__notifications">
          <NotificationTray></NotificationTray>
        </div>
      </div>
    );
  }
}

export default Header;
