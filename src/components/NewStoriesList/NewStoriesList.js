import React,{ useState, useEffect } from 'react';
import { getNewStories } from "../../store/actions/stories";
import { getNewArticles } from "../../store/actions/articles";
import { connect } from 'react-redux';

import './NewStoriesList.css'

const NewStoriesList=({getNewStories, getNewArticles, loading, newStories, currentLastIndex})=>{
    
    //initial 30 items
    const [lastIndex, setLastIndex]= useState(29)
    
    useEffect(()=>{
        getNewArticles(lastIndex)
    },[lastIndex])

    const handleMore=()=>{
       setLastIndex(lastIndex+30)
    }

   const currentIndex=(lastIndex, idx)=>{
       return (lastIndex-29) + (idx+1)
   }

  return (loading   ? <div>Loading</div>:
    <>
     {
         newStories.map((story,index)=>{
             return <div key={index}>
                  <span className={currentIndex(currentLastIndex, index) < 10 ? 'padding-single-digit': ''}>
                      {currentIndex(currentLastIndex, index)}.</span>
                  - {story.title===null? " ": story.title}</div>
         })
     }
    <button onClick={handleMore}>More</button>
    </>
  );
}

const mapStateToProps=state=>{
    return {
        newStories: state.articles.articles,
        loading: state.articles.loading,
        currentLastIndex: state.articles.currentLastIndex,
    }
}

export default connect(mapStateToProps,{getNewStories, getNewArticles})(NewStoriesList);