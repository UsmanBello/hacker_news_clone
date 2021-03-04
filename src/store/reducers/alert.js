import { ADD_ALERT, REMOVE_ALERT } from "../actionTypes";

const initialState = [];
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
