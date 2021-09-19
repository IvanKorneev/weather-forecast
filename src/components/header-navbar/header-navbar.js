import React from "react";
import './header-navbar.sass';
import {arr} from "../../helpers";

const HeaderNavbar = () => {

    const elements = arr.map((item, index) => {
        return (
            <li key={index}>
                <span>{item}</span>
            </li>
        )
    })
    return (
        <nav className='navbar'>
            <div className='navbar-elements'>
                <div className='navbar-search'>
                    <input type='text' placeholder='Weather in your city'/>
                </div>
                <ul>
                    {elements}
                </ul>
            </div>
        </nav>
    )
};
export default HeaderNavbar;