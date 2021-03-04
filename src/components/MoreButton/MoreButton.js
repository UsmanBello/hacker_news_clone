import './MoreButton.css'

const MoreButton=({getMore})=>{
    
   const fetchMore=()=>{
       getMore()
   }
  

  return <div className='more-button-container'>
      <span className='more-button'onClick={()=>{fetchMore()}}>More</span>
  </div>

}

export default MoreButton;