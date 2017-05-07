import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  query: "testing"
});

const dataReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    default:
      return state;
  }
};

export default dataReducer;
