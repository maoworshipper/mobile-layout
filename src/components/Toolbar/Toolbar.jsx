import React from 'react'
import './Toolbar.scss'
import Logo from '../../assets/images/logo.png'
import Money from '../../assets/images/coin-icon.svg'
import Colombia from '../../assets/images/bandera.png'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = props  => {
    return (
    <nav className="toolbar__navigation">
      <div className="toolbar__button">
          <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__menu">
        <ul className="toolbar__list">
          <li className="toolbar__item">
            <a href="/" className="toolbar__link">Requisitos de Alquiler</a>
          </li>
          <li className="toolbar__item">
            <a href="/" className="toolbar__link">Preguntas frecuentes</a>
          </li>
          <li className="toolbar__item">
            <a href="/" className="toolbar__link">Localidades</a>
          </li>
          <li className="toolbar__item">
            <a href="/" className="toolbar__link">Contáctanos</a>
          </li>
        </ul>
      </div>
      <div className="toolbar__logo">
        <a href="/"><img src={Logo} alt="miles car rental" /></a>
      </div>
      <div className="toolbar__spacer" />
      <div className="toolbar__groupicon">
        <img className="toolbar__icon" src={Money} alt="Money" />
        <img className="toolbar__icon" src={Colombia} alt="Colombia" />
      </div>
    </nav>
    );
}

export default Toolbar
