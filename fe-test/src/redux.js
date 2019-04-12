const UPDATE_DOGS = "UPDATE_DOGS";
const CLEAR_DOGS = "CLEAR_DOGS";

// Action
export const updateDogs = data => ({
  type: UPDATE_DOGS,
  data
});
export const clearDogs = data => ({
  type: CLEAR_DOGS,
  data
});

// Reducer
const initialState = {
  dogs: [],
  loading: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DOGS:
      return applyUpdateDogs(state, action);
    case CLEAR_DOGS:
      return applyClearDogs(state);
    default:
      return state;
  }
};

// Reducer Functions
const applyUpdateDogs = (state, action) => {
  return Object.assign({}, state, {
    dogs: [...state.dogs, ...action.data]
  });
};
const applyClearDogs = state => {
  return Object.assign({}, state, {
    dogs: []
  });
};

// Export
export default reducer;
