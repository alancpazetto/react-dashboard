import React from 'react';
import Queue from './../Queue/Queue';
import './Dashboard.scss';

export default () => (
  <div className="Dashboard">
    <div className="Dashboard__queue">
      <Queue />
    </div>
  </div>
);
