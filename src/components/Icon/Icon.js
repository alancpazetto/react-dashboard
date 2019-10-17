import React from 'react';

export default function(props) {
  const classes = ['fa', props.icon];
  return (
    <i className={classes.join(' ')}></i>
  );
}
