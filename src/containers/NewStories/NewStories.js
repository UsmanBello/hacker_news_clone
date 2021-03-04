import React,{ useState, useEffect } from 'react';
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent"
import StoriesList from "../../components/StoriesList/StoriesList";
import MoreButton from "../../components/MoreButton/MoreButton";
import {  getNewArticles } from "../../store/actions/articles";
import { connect } from 'react-redux';

import './NewStories.css'

const NewStories=({
    loading,
    stories, 
    currentLastIndex, 
    getNewArticles})=>{
    
    //initial 30 items
    const [lastIndex, setLastIndex]= useState(29)

    useEffect(()=>{
        getNewArticles(lastIndex)
   },[lastIndex])
 

    const handleMore=()=>{
       setLastIndex(lastIndex+30)
    }

  

  return (loading ? <LoadingComponent/>:
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

export default connect(mapStateToProps,{ getNewArticles })(NewStories);