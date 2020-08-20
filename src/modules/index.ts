import { combineReducers } from 'redux';
import news from './news';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
  news
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;