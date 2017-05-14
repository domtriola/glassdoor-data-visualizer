import * as Http from '../util/http_request';

export const UPDATE_DISPLAY_TYPE = "UPDATE_DISPLAY_TYPE";
export const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data
});

export const updateDisplayType = displayType => ({
  type: UPDATE_DISPLAY_TYPE,
  displayType
});

export const updateSearchQuery = searchQuery => ({
  type: UPDATE_SEARCH_QUERY,
  searchQuery
});

export const fetchData = query => dispatch => (
  Http.get(query, data => dispatch(receiveData(data)))
);
