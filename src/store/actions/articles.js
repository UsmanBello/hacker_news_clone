import { GET_ARTICLES, GET_NEW_STORIES, GET_TOP_STORIES } from "../actionTypes";
import axios from 'axios';
import axiosInstance from "../../services/api";
import {currentArticles} from "../../services/helper";
import setAlert from "./alert"

export function getNew(payload) {
  return {
    type: GET_NEW_STORIES,
    payload,
  };
}

export function getTop(payload) {
    return {
      type: GET_TOP_STORIES,
      payload,
    };
  }

export function getArticles(payload, lastIndex) {
  return {
    type: GET_ARTICLES,
    payload,
    lastIndex,
    
  };
}

 function getArticlesByIds(articleIds,dispatch, lastIndex){
  var data
  let promises =  articleIds.map(id=>{return axiosInstance.get(`/item/${id}.json?print=pretty`)})
      axios.all([...promises])
      .then(axios.spread((...responses)=>{
         data= responses.map(res=>{ return res.data})
        dispatch(getArticles(data, lastIndex))
      }))
      .catch(err=>
        dispatch(setAlert(err.message, 'warning')))
      return data
}

export function getNewArticles(lastIndex) {
  return  (dispatch) => {
   
    return axiosInstance
      .get("/newstories.json")
      .then((res) => {
        let ids= currentArticles(res.data, lastIndex)
        getArticlesByIds( ids,dispatch, lastIndex )
      })
      .catch((err) => {
        dispatch(setAlert(err.message, 'warning'));
      });
}
}

export function getTopArticles(lastIndex) {
  return  (dispatch) => {
    return axiosInstance
      .get("/topstories.json")
      .then((res) => {
        let ids= currentArticles(res.data, lastIndex)
        dispatch(getTop(res.data))
        getArticlesByIds( ids, dispatch, lastIndex )
      })
      .catch((err) => {
        dispatch(setAlert(err.message, 'warning'));
      });
}
}


