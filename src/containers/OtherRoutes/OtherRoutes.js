import { Link } from 'react-router-dom'

import './OtherRoutes.css'
const OtherRoutes = ()=>{
    return (
    <div className='uncreated-page'>
       <div className='pt-5 text-center'>
       <strong> There is no content on this page.
         Go to <Link to='/new-stories'>New stories</Link> {" "}
          or <Link to='/top-stories'>Top stories</Link>
          </strong>
    </div>
    </div>
    )
}

export default OtherRoutes;