import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Queue.scss';
import QueueItem from './QueueItem/QueueItem';

class Queue extends Component {
  render () {
    return (
      <div className="Queue">
        <h2>Customer Queue</h2>
        {this.props.customerQueue.map(queueItem => <QueueItem details={queueItem} />)}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  customerQueue: store.customerQueue,
});

export default connect(mapStateToProps)(Queue);