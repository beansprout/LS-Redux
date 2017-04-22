//default first reducer - receptionist that passes out memos to the other reducers in her list
import { combineReducers } from 'redux';
import TasksReducer from './todos'

const rootReducer = combineReducers({
  todos: TasksReducer,
});

export default rootReducer;