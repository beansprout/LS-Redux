import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { todoList } from './actions';
// import { bindActionCreators } from 'redux';
class Tasks extends Component {

  render() {
    console.log(this.props);

    return (
        <div className="Tasks">
          <ul>
              {this.props.todos.map((todo) => {
                return (
                  <h1>{todo.taskName}</h1>
                );
              })}
          </ul>
        </div>
    );
  }
}
// state refers to redux state object
// mapping
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};



export default connect(mapStateToProps)(Tasks);