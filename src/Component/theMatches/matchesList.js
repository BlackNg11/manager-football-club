import React, { Component } from 'react';

class MatchesList extends Component {

  state = {
    matchelist: []
  }

  static getDerivedStateFromProps(props, state) {
    return state = {
      matchelist: props.matches
    }
  }

  render() {
    return (
      <div>
        List
      </div>
    );
  }

}

export default MatchesList;
