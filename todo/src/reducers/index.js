
import { combineReducers } from 'redux';
import TasksReducer from './todos'; //
import AddTaskReducer from './addedItem';

const rootReducer = combineReducers({
  todos: TasksReducer,
  addedItem: AddTaskReducer,
});

export default rootReducer;

