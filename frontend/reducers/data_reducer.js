import merge from 'lodash/merge';

import {
  UPDATE_DISPLAY_TYPE, 
  UPDATE_SEARCH_QUERY } from '../actions/data_actions';

const _defaultState = Object.freeze({
  searchQuery: "",
  displayType: "fixed"
});

const dataReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case UPDATE_DISPLAY_TYPE:
      return merge(nextState, { displayType: action.displayType });
    case UPDATE_SEARCH_QUERY:
      return merge(nextState, { searchQuery: action.searchQuery });
    default:
      return state;
  }
};

export default dataReducer;
