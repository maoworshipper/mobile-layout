import React from 'react';
import './DrawerToggleButton.scss';

const drawerToggleButton = props => {
    return(
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line toggle-button__line--medium" />
            <div className="toggle-button__line toggle-button__line--small" />
        </button>
    );
}

export default drawerToggleButton
