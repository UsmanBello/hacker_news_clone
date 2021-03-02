import { GET_ARTICLES } from "../actionTypes";


const DEFAULT_STATE = {
  loading: true,
  articles:[],
};

export default (state = DEFAULT_STATE, action) => {
  const { type, payload, total } = action;
  switch (type) {
    case GET_ARTICLES:
      return {
        loading: false,
        articles: payload,
      };
     
    default:
      return state;
  }
};