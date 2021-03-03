import React,{ useState, useEffect } from 'react';
import FooterSearch from '../FooterSearch/FooterSearch';

import './Footer.css'

const Footer=()=>{
    
   return (
  <div className='footer text-center horizontal'>
    <div id='foot-title'>
     <a href='https://www.ycombinator.com/apply/'>
       Applications are opened for YC Summer 2021
     </a>
     </div>
     <div id='footer-links'> 
          <a href='https://news.ycombinator.com/newsguidelines.html'>Guidlines</a>
          <span className='footer-links-divider'><strong>|</strong></span>
          <a href='https://news.ycombinator.com/newsfaq.html'>FAQ</a>
          <span className='footer-links-divider'><strong>|</strong></span>
          <a href='https://news.ycombinator.com/lists'>Lists</a>
          <span className='footer-links-divider'><strong>|</strong></span>
          <a href='https://github.com/HackerNews/API'>API</a>
          <span className='footer-links-divider'><strong>|</strong></span>
          <a href='https://news.ycombinator.com/security.html'>Security</a>
          <span className='footer-links-divider'><strong>|</strong></span>
          <a href='http://www.ycombinator.com/legal/'>Legal</a>
          <span className='footer-links-divider'><strong>|</strong></span>
          <a href='http://www.ycombinator.com/apply/'>Apply to YC</a>
          <span className='footer-links-divider'><strong>|</strong></span>
          <a href='mailto:hn@ycombinator.com'>Contact</a>
     </div>
     <div id='footer-search'>
            <FooterSearch/>
     </div>
  </div>
   )
}


export default Footer