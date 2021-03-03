import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './StoriesList.css'

const StoriesList=({lastIndex, stories})=>{
    
    const currentIndex=(last, idx)=>{
        return (last-29) + (idx+1)
    }

  return (
    <>
     {
         stories.map((story,index)=>{
             return <div key={index}>
                  <span className={currentIndex(lastIndex, index) < 10 ? 'padding-single-digit': ''}>
                      {currentIndex(lastIndex, index)}.</span>
                  - {story.title===null? " ": story.title}</div>
         })
     }
    </>
  );
}


export default StoriesList