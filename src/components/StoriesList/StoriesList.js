import StoryItem from "../StoryItem/StoryItem";

import './StoriesList.css'

const StoriesList=({lastIndex, stories})=>{
    
    const currentIndex=(last, idx)=>{
        return (last-29) + (idx+1)
    }

    console.log(stories)
  return (
    <>
     {
         stories.map((story,index)=>{
             return<StoryItem key={index}  story={story} index={currentIndex(lastIndex, index)}/> 
         })
     }
    </>
  );
}


export default StoriesList