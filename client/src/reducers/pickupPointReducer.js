import { LOAD_PICKUPPOINTS } from "../actions/types";

// Set initial state
const initialState = {
  pickupPoints: []
};

// Update the state based on the dispached actions
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PICKUPPOINTS:
      return {
        ...state,
        pickupPoints: action.payload
      };
    default:
      return state;
  }
};
