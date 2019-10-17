import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  
  render () {
    let prefix = this.props.prefix ? (<div className="Input__prefix">{this.props.prefix}</div>) : null;
    let suffix = this.props.suffix ? (<div className="Input__suffix">{this.props.suffix}</div>) : null;
    return (
      <div className="Input">
        {prefix}
        <input type="text" placeholder={this.props.placeholder} />
        {suffix}
      </div>
    );
  }
}

export default Input;
