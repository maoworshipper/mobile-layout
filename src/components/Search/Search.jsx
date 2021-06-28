import React from 'react';
import Switch from './Switch';
import './Search.scss';
import carIcon from '../../assets/images/car-icon.svg';
import calendarIconIzquierda from '../../assets/images/calendar-izq.svg';
import calendarIconDerecha from '../../assets/images/calendar-der.svg';
import searchIcon from '../../assets/images/search.svg';

function Search() {
    return (
        <div className="search">
        <div className="search__container">
          <h3 className="search__title">ALQUILER DE CARROS MIAMI</h3>
          <div className="search__control--group">
          <div className="search__control">
            <div className="search__controlicon">
                <img src={carIcon} alt="localidad de retiro" />
            </div>
            <div className="search__control--column">
                <label className="search__label">Localidad de Retiro</label>
                <input type="text" className="search__input" placeholder="Ciudad, Aeropuerto o Ciudad" />
            </div>
          </div>
          </div>
          <Switch />
          <div className="search__control--group">
          <div className="search__control search__control--dateout">
            <div className="search__controlicon">
                <img src={calendarIconIzquierda} alt="fecha recogida" />
            </div>
            <div className="search__control--column">
                <label className="search__label">Recogida</label>
                <input type="date" className="search__input search__input--date" />
            </div>
          </div>
          <div className="search__control search__control--datein">
          <div className="search__controlicon">
                <img src={calendarIconDerecha} alt="fecha devolución" />
            </div>
            <div className="search__control--column">
            <label className="search__label">Devolución</label>
            <input type="date" className="search__input search__input--date" />
            </div>
          </div>
          </div>
          <div className="search__control--button" >
            <button className="search__button">
              <img src={searchIcon} alt="Buscar" />
            </button>
          </div>
          </div>
        </div>
    )
}

export default Search
