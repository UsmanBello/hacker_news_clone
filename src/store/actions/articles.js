import { GET_ARTICLES, GET_NEW_STORIES, GET_TOP_STORIES } from "../actionTypes";
import axios from 'axios';
import axiosInstance from "../../services/api"
import {currentArticles} from "../../services/helper"
import { configureStore } from "../index"

const allTopStories= configureStore().getState().stories.topStories
const allNewStories= configureStore().getState().stories.newStories


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
    console.log('here')
  var data
  let promises =  articleIds.map(id=>{return axiosInstance.get(`/item/${id}.json?print=pretty`)})
      axios.all([...promises])
      .then(axios.spread((...responses)=>{
         data= responses.map(res=>{ return res.data})
        dispatch(getArticles(data, lastIndex))
      }))
      .catch(err=>console.log(err))
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
        console.log(err);
      });
}
}

export function getTopArticles(lastIndex) {
  return  (dispatch) => {
    return axiosInstance
      .get("/topstories.json")
      .then((res) => {
        // console.log(res.data)
        let ids= currentArticles(res.data, lastIndex)
        console.log(ids)
        dispatch(getTop(res.data))
        getArticlesByIds( ids, dispatch, lastIndex )
      })
      .catch((err) => {
        console.log(err);
      });
}
}


