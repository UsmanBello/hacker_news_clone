import { GET_ARTICLES } from "../actionTypes";
import axios from 'axios';
import { getNewStories } from "./stories";
import { configureStore } from '../index';
import currentArticles from "../../services/helper"
import axiosInstance from "../../services/api"


export function getArticles(payload, lastIndex) {
  return {
    type: GET_ARTICLES,
    payload,
    lastIndex,
    
  };
}

function getEachArticle(articleIds, dispatchFunction, lastIndex){
  var data
  let promises =  articleIds.map(id=>{return axiosInstance.get(`/item/${id}.json?print=pretty`)})
      axios.all([...promises])
      .then(axios.spread((...responses)=>{
         const data= responses.map(res=>{ return res.data})
        dispatchFunction(getArticles(data, lastIndex))
      }))
      .catch(err=>console.log(err))
      return data
}


export function getNewArticles(lastIndex) {
  return  (dispatch) => {
    return axiosInstance
      .get("/topstories.json")
      .then((res) => {
        let ids= currentArticles(res.data, lastIndex)
        getEachArticle( ids, dispatch, lastIndex )
      })
      .catch((err) => {
        console.log(err);
      });
  
}
}


