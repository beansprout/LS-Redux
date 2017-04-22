import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tasks extends Component {
  render() {
    if (this.props.taskName === null) {
      return (<h2>add tasks</h2>);
    }
    return (
        <div className="Tasks">
          <ul>
            <li>Task:{this.props.taskName}</li>
            <li>TaskState:{this.props.taskState}</li>
          </ul>
        </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    taskName: state.taskState,
  };
};

export default connect(mapStateToProps)(Tasks);