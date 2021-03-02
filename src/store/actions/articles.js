import { GET_ARTICLES } from "../actionTypes";
import axios from 'axios';
import { getNewStories } from "./stories";
import { configureStore } from '../index';
import currentArticles from "../../services/helper"


export function getArticles(payload) {
  return {
    type: GET_ARTICLES,
    payload,
  };
}


// function getEachArticle(articleIds){
//   var data
//   let promises =  articleIds.map(id=>{return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)})
//       axios.all([...promises])
//       .then(axios.spread((...responses)=>{
//          data= responses.map(res=>{ return res.data})
//         // dispatch(getArticles(data))
//       }))
//       .catch(err=>console.log(err))
   
//       return data
// }


export function getNewArticles(lastIndex, getNewStories) {
  return  (dispatch) => {
     const path="https://hacker-news.firebaseio.com/v0/newstories.json"
     const config={
      headers:{
        "Content-Type": "application/json"
      }
     }
    return axios
      .get(path, config)
      .then((res) => {
        let ids= currentArticles(res.data, lastIndex)
      console.log(ids)
      //GETTING EACH ITEM 
      let  promises =  ids.map(id=>{return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)})
      axios.all([...promises])
      .then(axios.spread((...responses)=>{
        console.log(responses)
        const data= responses.map(res=>{return res.data })
        console.log(data)
        dispatch(getArticles(data))
      }))
      .catch(err=>console.log(err))
      })
      .catch((err) => {
        console.log(err);
        
      });
  
}
}


