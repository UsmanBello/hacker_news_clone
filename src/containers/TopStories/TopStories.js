import React,{ useState, useEffect } from 'react';
import StoriesList from "../../components/StoriesList/StoriesList";
import MoreButton from "../../components/MoreButton/MoreButton";
import {  getTopArticles } from "../../store/actions/articles";
import { connect } from 'react-redux';

import './TopStories.css'

const TopStories=({
    loading,
    stories, 
    currentLastIndex, 
    getTopArticles})=>{
    
    //initial 30 items
    const [lastIndex, setLastIndex]= useState(29)

    useEffect(()=>{
        getTopArticles(lastIndex)
   },[lastIndex])
 

    const handleMore=()=>{
       setLastIndex(lastIndex+30)
    }

  

  return (loading ? <div>Loading</div>:
    <div id='Page-layout'>
        <StoriesList lastIndex={currentLastIndex} stories={stories}/>
     <MoreButton getMore={handleMore}/>
    </div>
  );
}

const mapStateToProps=state=>{
    return {
        stories: state.articles.articles,
        loading: state.articles.loading,
        currentLastIndex: state.articles.currentLastIndex,
    }
}

export default connect(mapStateToProps,{getTopArticles})(TopStories);