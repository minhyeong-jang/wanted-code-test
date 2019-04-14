const GET_DOGS = "GET_DOGS";
const CLEAR_DOGS = "CLEAR_DOGS";
const UPDATE_LOADING = "UPDATE_LOADING";

// Action
export const updateDogs = data => ({
  type: GET_DOGS,
  data
});
export const clearDogs = data => ({
  type: CLEAR_DOGS,
  data
});
export const updateLoading = data => ({
  type: UPDATE_LOADING,
  data
});

// Reducer
const initialState = {
  dogs: [],
  isLoading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return applyupdateDogs(state, action);
    case CLEAR_DOGS:
      return applyClearDogs(state);
    case UPDATE_LOADING:
      return applyUpdateLoading(state, action);
    default:
      return state;
  }
};

// Reducer Functions
const applyupdateDogs = (state, action) => {
  return Object.assign({}, state, {
    dogs: [...state.dogs, ...action.data]
  });
};
const applyClearDogs = state => {
  return Object.assign({}, state, {
    dogs: []
  });
};
const applyUpdateLoading = (state, action) => {
  return Object.assign({}, state, {
    isLoading: action.data
  });
};

// Export
export default reducer;
