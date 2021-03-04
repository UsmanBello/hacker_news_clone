import React,{ useState, useEffect } from 'react';
import { extract_domain, timeSince,  } from "../../services/helper";
import { Link } from 'react-router-dom'

import './StoryItem.css'
// index < 10 ? 'padding-single-digit': ''
const StoryItem=({uniqueId , story, index})=>{
    const { title, url, score, by, kids, time } = story;
    // console.log(story.kids.length)
    return  <div  className='meta-data-container'>
    <span className={index < 10 ? 'padding-single-digit index': 'index'}>{index}.</span>
    <span className="material-icons upvote-icon">
        arrow_drop_up
    </span>
    
     <div className='d-inline-block meta-details-container'>
         <div className='top-meta'>
      <a href={url} className='meta-title'>{title===null? " ": title}{' '}</a> 
       <a className='small-meta-text' href={`https://news.ycombinator.com/from?site=${extract_domain(url)}`}>{url && `(${extract_domain(url)})`}</a>
       </div>
       <p className='bottom-meta bottom-meta-text'>
         {score} by {' '}
         <a href={`https://news.ycombinator.com/user?id=${by}`}
          className='bottom-meta-link'>{by}
          </a> {' '}{timeSince(time)}{' '}
          | <Link className='bottom-meta-link' to='/uncreated-routes'>
              hide
              </Link> | {kids ? `${kids.length} comments` : ''}.
       </p>
    </div>
    </div>
}
 

export default StoryItem