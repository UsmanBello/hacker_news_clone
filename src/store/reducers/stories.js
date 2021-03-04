//STORE FOR  STORIES IDS
import { GET_NEW_STORIES } from "../actionTypes";
import { GET_TOP_STORIES } from "../actionTypes";


const DEFAULT_STATE = {
  loadingTopStories: true,
  loadingNewStories: true,
  topStories:[],
  newStories: [],
};

export default (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEW_STORIES:
      return {
        loadingNewStories: false,
        newStories: payload,
      };
      case GET_TOP_STORIES:
        return {
          loadingTopStories: false,
          countries: payload,
        };
    default:
      return state;
  }
};