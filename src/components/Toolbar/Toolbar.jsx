import React from 'react'
import './Toolbar.scss'
import Logo from '../../assets/images/logo.png'
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
        <a href="/"><img src={Logo} /></a>
      </div>
    </nav>
    );
}

export default Toolbar
