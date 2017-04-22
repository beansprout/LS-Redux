
import { combineReducers } from 'redux';
import TasksReducer from './todos' //



const rootReducer = combineReducers({
  todos: TasksReducer,

});

export default rootReducer;