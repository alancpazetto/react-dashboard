import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Queue.scss';
import QueueItem from './QueueItem/QueueItem';
import axios from 'axios';

class Queue extends Component {

  state = {
    queue: []
  };

  constructor(props) {
    super(props);
    this.loadQueue();
  }

  loadQueue() {
    axios
      .get('http://localhost:3000/api/queue')
      .then(
        res => {
          console.log('[RES]', res.data);
          this.setState({queue: res.data});
        })
      .catch(err => console.error);
  }

  onCallItem(index) {
    this.state.queue.splice(index, 1);
    this.setState({
      queue: this.state.queue,
    });
    // TODO: Insert client to "activeCustomers"
  }

  onRemoveItem(index) {
    this.state.queue.splice(index, 1);
    this.setState({
      queue: this.state.queue,
    });
  }

  render () {
    return (
      <div className="Queue">
        <h2>Customer Queue</h2>
        {this.state.queue.map((queueItem, index) => 
          <QueueItem
            details={queueItem}
            onCall={() => this.onCallItem(index)}
            onRemove={() => this.onRemoveItem(index)} />)}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  customerQueue: store.customerQueue,
});

export default connect(mapStateToProps)(Queue);