import React from 'react';
import './Switch.scss';

function Switch() {
    return (
        <div className="switch">
            <label class="switch__container">
                <input type="checkbox" className="switch__checkbox" />
                <span class="switch__slider switch__round"></span>
            </label>
            <span className="switch__label">lo quiero devolver en otra localidad</span>
        </div>
    )
}

export default Switch
