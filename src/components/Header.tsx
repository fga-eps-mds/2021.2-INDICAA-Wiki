import React, { useState } from "react";
import './../assets/stylesheets/Header.css';
import Logo from '../assets/images/Logo_INDICAA.png'
import GitLogo from '../assets/images/github-icon.png'

export function Header() {

    const [hover, setHover] = useState(0);

    function isOver(){
        setHover(1);
    }

    function leave(){
        setHover(0);
    }
    console.log(hover)

    return (
        <div className="Top">
            <span>
                <a href="https://github.com/fga-eps-mds/2021.2-INDICAA" target={"_blank"}><img src={GitLogo} alt="GitHub Logo" className="logo-GIT"/></a>
            </span>
            <div className="flex">
                <span>
                    <img src={Logo} className="logo-INDICAA" alt="INDICAA"></img>
                </span>
                <div className='Name'><b>INDICAA</b></div>
            </div>
            <div>
                <span className="material-icons" id="info" onMouseOver={isOver} onMouseLeave={leave} >
                    info
                </span>
                <div className={hover ? "info" : ""}>
                    <div className={hover ? "content-info" : "without-content"}>A ajuda ao usuário aparecerá aqui.</div>
                </div>
            </div>
        </div>
    );
}