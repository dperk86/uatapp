import { combineReducers } from 'redux';

import organizations from './organizations';
import events from './events';

export default combineReducers({
  organizations,
  events,
});
