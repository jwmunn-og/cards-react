import React from 'react';

export default class PlayingCard extends React.Component {
  render () {
    return (
      <p key={this.props.index}>
        {this.props.rank} of {this.props.suit}
      </p>
    );
  }
}