import React, {Component} from 'react';
import './Tasks.css';
import {connect} from 'react-redux';
import AddToDo from './AddToDo';


class Tasks extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Tasks">
        <h1>To Do List</h1>
        <ul>
          {this
            .props
            .todos
            .map((todo, i) => {
              return (
                <li key={i}>{todo.taskName}</li>
              );
            })}
          <li className="form">
            <AddToDo/>
          </li>
        </ul>

      </div>
    );
  }
}

// state refers to redux state object mapping
const mapStateToProps = (state) => {
  return {todos: state.todos};
}

export default connect(mapStateToProps)(Tasks);
