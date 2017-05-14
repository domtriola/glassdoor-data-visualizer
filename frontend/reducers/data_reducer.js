import merge from 'lodash/merge';

import {
  RECEIVE_DATA,
  UPDATE_DISPLAY_TYPE,
  UPDATE_SEARCH_QUERY } from '../actions/data_actions';

const _defaultState = Object.freeze({
  searchQuery: "",
  displayType: "fixed",
  data: {}
});

const dataReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_DATA:
      return merge(nextState, { data: action.data });
    case UPDATE_DISPLAY_TYPE:
      return merge(nextState, { displayType: action.displayType });
    case UPDATE_SEARCH_QUERY:
      return merge(nextState, { searchQuery: action.searchQuery });
    default:
      return state;
  }
};

export default dataReducer;
