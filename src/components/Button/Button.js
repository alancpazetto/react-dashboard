import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {

  props = {
    onClick: () => { },
    color: 'normal',
    className: '',
  };

  onClick(evt) {
    this.props.onClick(evt);
  }

  render() {
    let classes = ['CustomButton'];
    if (this.props.color && this.props.color === 'danger') {
      classes.push('CustomButton--danger');
    }
    return (
      <button className={classes.join(' ')} onClick={this.onClick.bind(this)}>{this.props.children}</button>
    );
  }
}

export default Button;
