import React from 'react';
import './CloseButton.scss';

const CloseButton = props => {
    return(
        <button className="close-button" onClick={props.close}>
            <div className="close-button__line close-button__line--up" />
            <div className="close-button__line close-button__line--down" />
        </button>
    );
}

export default CloseButton