import React from 'react';
import moment from 'moment';

export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a") };
  }

  tick() {
    this.setState(() => ({
      time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
  clearInterval(this.interval);
}

render() {
  return (
    <div>
      <h1>Time:</h1>
      <h4>{this.state.time}</h4>
    </div>
  );
}
}
