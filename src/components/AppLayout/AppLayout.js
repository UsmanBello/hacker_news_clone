import React from "react";
import NavMenu from "../../components/NavMenu/NavMenu";
import Alert from "../../components/Alert/Alert";
import Footer from "../../components/Footer/Footer";
import './AppLayout.css'





const AppLayout = ({children })=>{
  
  return ( 
    <div className='background'>
    <div className="App">
    <div className="content">
        <NavMenu/>
        <Alert></Alert>
        {children}
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default AppLayout;