import React from 'react';
import './Navigation.scss';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
            <div class="navigation">
                <div className="links">
                    <NavLink className="link"  to="/Home">Home</NavLink>
                    <NavLink className="link"  to="/Menu">Menu</NavLink>
                    <NavLink className="link"  to="/Reserva">Reserva</NavLink>
                </div> 
            </div>   
    )
}

export default Navigation;