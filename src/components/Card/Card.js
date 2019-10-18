import React from 'react';
import './Card.scss';

export default (props) => (
  <div className="Card">

    <div className="Card__content">
      <div className="Card__content__limit-usage-label">Limit utilizado</div>
      <div className="Card__content__limit-usage">R$ {props.limitUsage}</div>
      <div className="Card__content__name">{props.name}</div>
    </div>
  </div>
);