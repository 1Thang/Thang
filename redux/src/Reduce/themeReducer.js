// themeReducer.js
import * as actionTypes from '../actions/actionTypes';

const initialState = 'light';

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

export default themeReducer;
