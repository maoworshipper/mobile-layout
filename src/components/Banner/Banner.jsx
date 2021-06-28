import React from 'react';
import './Banner.scss';
import automovil from '../../assets/images/car.png';

function Banner() {
    return (
        <div className="container">
        <div className="banner">
            <div className="banner__row">
            <img className="banner__image" src={automovil} alt="alquiler de carros" />
            <h2 className="banner__title">¡SEGURO DE VIAJE <span className="banner__title--primary">GRATIS!</span></h2>
            </div>
            <div className="banner__row">
            <p className="banner__text">Con cobertura médica frente al coronavirus de USD $100.000</p>
            </div>
            
        </div>
        </div>
    )
}

export default Banner
