const UPDATE_DOGS = "UPDATE_DOGS";

// Action
export const updateDogs = () => ({
  type: UPDATE_DOGS
});

// Reducer
const initialState = {
  dogs: [],
  loading: true
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DOGS:
      return applyUpdateDogs(state);
    default:
      return state;
  }
};

// Reducer Functions
const applyUpdateDogs = state => {
  return {
    ...state
  };
};

// Export
export default reducer;
