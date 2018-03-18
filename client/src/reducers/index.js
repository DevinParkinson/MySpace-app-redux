import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import mes from './mes';

const rootReducer = combineReducers({
  user,
  flash,
  mes
});

export default rootReducer;
