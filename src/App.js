import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import CloseButton from "./components/SideDrawer/CloseButton";

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
        <p>
          Contenido
        </p>
      </main>
   
    </div>
  );
}

export default App;
