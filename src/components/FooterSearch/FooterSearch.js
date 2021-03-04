import React,{ useState } from 'react';

import './FooterSearch.css'

const FooterSearch=()=>{
    const [searchString, setSearchString]= useState('')


    const handleChange=(e)=>{
        setSearchString(e.target.value)
    }
    const handleKeyDown=(e)=>{
        if(e.keyCode !== 13) return;
        /* HANDLESEARCH HERE */
        setSearchString('')
    }
 

   return (
  <>
  <div>
      <label id='search-label'>Search: </label>
      <input
      id='search-bar'
      type='text'
      onChange={(e)=>handleChange(e)}
      onKeyDown={(e)=>handleKeyDown(e)}
      value={searchString}/>
  </div>
  </>
   )
}


export default FooterSearch