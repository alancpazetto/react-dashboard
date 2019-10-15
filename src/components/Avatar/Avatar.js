import React from 'react';
import './Avatar.scss';

export default (props) => <div className="Avatar">
  <div
    className="Avatar__image"
    style={{backgroundImage: `url(${props.avatar})`}}></div>
  <p className="Avatar__name">{props.name}</p>
  <p className="Avatar__nickname">{props.nickname}</p>
</div>
