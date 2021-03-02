import { GET_NEW_STORIES, GET_TOP_STORIES } from "../actionTypes";
import setAlert from "./alert";
import axios from 'axios'
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

export function getNewStories() {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const config= {
        headers:{
          "Content-Type": "application/json"
        }
      }
      const path="https://hacker-news.firebaseio.com/v0/newstories.json"
    return axios
      .get(path, config)
      .then((res) => {
        console.log(res.data)
        dispatch(getNew(res.data));
        resolve(res.data)
      })
      .catch((err) => {
        console.log(err);
        reject(err)
      });
    })
  };
}

export function getTopStories() {
    return (dispatch) => {
      return new Promise((resolve, reject) => {
      return axios
        .get("/topstories")
        .then((res) => {
          console.log(res.data);
          dispatch(getTop(res.data));
          resolve(res.data)
        })
        .catch((err) => {
          console.log(err);
          reject(err)
        });
      })
    };
  }