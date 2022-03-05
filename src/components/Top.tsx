import React from "react";
import './../assets/stylesheets/Top.css';
import Logo from '../assets/images/logo_INDICAA.png'

export function Top() {
    return (
        <div className='Top'>
            <span>
                <img src={Logo} className="logo" alt="INDICAA"></img>
            </span>
            <div className='Name'><b>INDICAA</b></div>
        </div>
    );
}