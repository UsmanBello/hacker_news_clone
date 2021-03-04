import { GET_ARTICLES } from "../actionTypes";


const DEFAULT_STATE = {
  loading: true,
  articles:[],
  ccurrentArticles:[]
};

export default  (state = DEFAULT_STATE, action) => {
  const { type, payload, lastIndex } = action;
  switch (type) {
    case GET_ARTICLES:
      return {
        loading: false,
        articles: payload,
        currentLastIndex: lastIndex
      };
     
    default:
      return state;
  }
};

