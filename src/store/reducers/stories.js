import { GET_NEW_STORIES } from "../actionTypes";
import { GET_TOP_STORIES } from "../actionTypes";


const DEFAULT_STATE = {
  loading: true,
  topStories:[],
  newStories: [],
};

export default (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEW_STORIES:
      return {
        loading: false,
        newStories: payload,
      };
      case GET_TOP_STORIES:
        return {
          loading: false,
          countries: payload,
        };
    default:
      return state;
  }
};