import React,{ useState, useEffect } from 'react';
import StoriesList from "../../components/StoriesList/StoriesList";
import MoreButton from "../../components/MoreButton/MoreButton";
import { getNewStories } from "../../store/actions/stories";
import { getNewArticles } from "../../store/actions/articles";
import { connect } from 'react-redux';

import './TopStories.css'

const TopStories=({getNewStories, getNewArticles, loading, newStories, currentLastIndex})=>{
    
    //initial 30 items
    const [lastIndex, setLastIndex]= useState(29)
    
    useEffect(()=>{
        getNewArticles(lastIndex)
    },[lastIndex])

    const handleMore=()=>{
       setLastIndex(lastIndex+30)
    }

  

  return (loading   ? <div>Loading</div>:
    <div id='Page-layout'>
        <StoriesList lastIndex={currentLastIndex} stories={newStories}/>
     <MoreButton getMore={handleMore}/>
    </div>
  );
}

const mapStateToProps=state=>{
    return {
        newStories: state.articles.articles,
        loading: state.articles.loading,
        currentLastIndex: state.articles.currentLastIndex,
    }
}

export default connect(mapStateToProps,{getNewStories, getNewArticles})(TopStories);