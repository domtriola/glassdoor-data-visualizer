export const UPDATE_DISPLAY_TYPE = "UPDATE_DISPLAY_TYPE";
export const UPDATE_SEARCH_QUERY = "UPDATE_SEARCH_QUERY";

export const updateDisplayType = displayType => ({
  type: UPDATE_DISPLAY_TYPE,
  displayType
});

export const updateSearchQuery = searchQuery => ({
  type: UPDATE_SEARCH_QUERY,
  searchQuery
});
