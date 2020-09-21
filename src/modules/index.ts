import { combineReducers } from 'redux';
import news from './news';
import user from './user';

const rootReducer = combineReducers({
  user,
  news
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;