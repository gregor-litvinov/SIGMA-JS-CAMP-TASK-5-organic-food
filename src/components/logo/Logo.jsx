import React from 'react';
import './Logo.scss'
import logoImage from "../../assets/img/LogoNav.png";


const Logo = () => {
	return (
<div className="logo-container">
            <img src={logoImage} alt="logo" className="logo" />
            <span>Organick</span>
          </div>
	);
};

export default Logo;