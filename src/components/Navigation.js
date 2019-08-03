import React from 'react';
import './Navigation.scss';
import { NavLink } from "react-router-dom";
import logowhite from '../img/logowhitee.png';

const Navigation = () => {
    return (
            <div class="navigation">
                <div className="links">
                    <img className='logowhite2' src={logowhite} alt='logowhite' />
                    <NavLink className="link"  to="/Home">HOME</NavLink>
                    <NavLink className="link"  to="/Menu">MENU</NavLink>
                    <NavLink className="link"  to="/Reserva">RESERVA</NavLink>
                </div> 
            </div>   
    )
}

export default Navigation;