import React, { useState } from 'react';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import CloseButton from "./components/SideDrawer/CloseButton";
import Search from './components/Search/Search';
import Banner from './components/Banner/Banner';
import Rating from './components/Rating/Rating';
import Partners from './components/Partners/Partners';

function App() {

 const [sideDrawerOpen, setSideDrawerOpen] = useState(
        false
    );

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen((sideDrawerOpen) => {
            return sideDrawerOpen = !sideDrawerOpen  
        }); 
    };

    let sideDrawer;
    let closeButton;
    if(sideDrawerOpen === true){
        sideDrawer = <SideDrawer />;
        closeButton = <CloseButton close={drawerToggleClickHandler} />;
    }
 

  return (
    <div style={{height: '100%'}}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      {sideDrawer}
      {closeButton}
      <main>
        <Search />
        <Banner />
        <Rating />
        <Partners />
      </main>
   
    </div>
  );
}

export default App;
