// @ts-check

import { combineReducers } from 'redux';

import currentTheme, { actions as currentThemeActions } from './currentTheme';
import counter, { actions as counterActions } from './counter';

export default combineReducers({
  currentTheme,
  counter,
});

const actions = {
  ...currentThemeActions,
  ...counterActions,
};

const asyncActions = {

};

export {
  actions,
  asyncActions,
};
