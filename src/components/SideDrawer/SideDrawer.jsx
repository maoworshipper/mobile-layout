import React from 'react';
import CloseButton from './CloseButton';
import './SideDrawer.scss';
import Logo from '../../assets/images/logo.png'
import Facebook from '../../assets/images/facebook.svg'
import Twitter from '../../assets/images/twitter.svg'
import Google from '../../assets/images/google.svg'
import Instagram from '../../assets/images/instagram.svg'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer side-drawer--open';
    }
    return (
        <nav className={drawerClasses}>
            <div className="side-drawer__logo">
                <a href="/"><img src={Logo} alt="" /></a>
            </div>
            <ul className="side-drawer__list">
               <li><a className="side-drawer__link" href="/">Requisitos de Alquiler</a></li>
               <li><a className="side-drawer__link" href="/">Preguntas frecuentes</a></li> 
               <li><a className="side-drawer__link" href="/">Localidades</a></li> 
               <li><a className="side-drawer__link" href="/">Contáctanos</a></li> 
               <li className="side-drawer__social"><a className="side-drawer__link" href="/">
               <h5 className="side-drawer__socialtitle">SIGUENOS EN</h5>
                <ul className="side-drawer__list side-drawer__list--social">
                    <li><a href="/"><img className="side-drawer__icon" src={Facebook} alt="Facebook" /></a></li>
                    <li><a href="/"><img className="side-drawer__icon" src={Twitter} alt="Twitter" /></a></li>
                    <li><a href="/"><img className="side-drawer__icon" src={Google} alt="Google" /></a></li>
                    <li><a href="/"><img className="side-drawer__icon" src={Instagram} alt="Instagram" /></a></li>
                </ul>
               </a></li> 
            </ul>
            {/*<div className="side-drawer__social">
                <h3>SIGUENOS EN</h3>
                <ul className="side-drawer__list side-drawer__list--social">
                    <li><a href="/"><i class="side-drawer__icon side-drawer__icon--facebook"></i></a></li>
                    <li><a href="/"><i class="side-drawer__icon side-drawer__icon--twitter"></i></a></li>
                </ul>
            </div>*/}
        </nav>
    )
}

export default SideDrawer;
