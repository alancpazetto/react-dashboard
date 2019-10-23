import React, { Component } from 'react';
import './QueueItem.scss';
import Button from '../../Button/Button';

class QueueItem extends Component {
  state = {
    timer: '12 minutes',
  };

  render() { 
    return (
      <div className="QueueItem">

        <div className="QueueItem__user">
          <div
            className="QueueItem__user__photo"
            style={{backgroundImage: `url(${this.props.details.user.avatar})`}}></div>
        </div>

        <div className="QueueItem__details">
          <div className="QueueItem__details__content">
            <div className="QueueItem__details__content__text">
              <h3 className="QueueItem__details__content__text__user-name">{this.props.details.user.name}</h3>
              <p className="QueueItem__details__content__text__minimum-seats">A table with <b>{this.props.details.minimumSeats} Seats</b></p>
            </div>
            <div className="QueueItem__details__content__timer">
              <p>
                <small>Waiting for:</small><br />
                {this.state.timer}
              </p>
            </div>
          </div>

          <div className="QueueItem__details__actions">
            <div className="remove">
              <Button onClick={() => this.props.onRemove(this.props.details)} color="danger">Remove from queue</Button>
            </div>
            <div className="call">
              <Button onClick={() => this.props.onCall(this.props.details)}>Call {this.props.details.user.name}</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QueueItem;
