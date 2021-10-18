import React from "react";
import './menu.css'

const Menu = ({items, active, setActive}) => {
    return (
            <div className = {active ? 'burger_menu active':'burger_menu'} onClick = {() => setActive(false)}>
                <div className = "background_menu">
                {items.map(item =>
                    <div className = "burger_menu_component" onClick = {e => e.stopPropagation()}>
                        <span className = "material-icons">{item.icon}</span>
                    </div>
                    )} 
                </div>               
            </div>
    );
};

export default Menu;