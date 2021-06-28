import React from 'react';
import './Partners.scss';
import partners from '../../assets/images/agencies.png';

function Partners() {
    return (
        <div className="partners">
            <img className="partners__image" src={partners} alt="partners" />
        </div>
    )
}

export default Partners
