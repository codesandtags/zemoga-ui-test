import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

const NavBar = ({ navigation, heading }) => {
    const renderNavigationLinks = () => {
        const links = navigation.links.map((item, index) => {
            return (
                <li className="navbar__link" key={`navbar_link_${index}`}>
                    <Link to={item.link}>{item.label}</Link>
                </li>
            )
        });

        const classNameNavigation = `navbar__navigation ${showNavigationMobile ? 'navbar__navigation--show' : ''}`;
        return (
            <ul className={classNameNavigation}>
                {links}
                <li className="navbar__link">
                    <a href="#"><span className="fas fa-search"></span></a>
                </li>
            </ul>
        )
    };
    const [showNavigationMobile, setShowNavigationMobile] = useState(false);
    const toggleNavigationMobile = () => {
        setShowNavigationMobile(!showNavigationMobile);
    };

    return (
        <nav className="navbar">
            <div htmlFor="hamburger" className="hamburger-menu" onClick={toggleNavigationMobile}>
                <span className="hamburger-menu__slice"></span>
                <span className="hamburger-menu__slice"></span>
                <span className="hamburger-menu__slice"></span>
            </div>

            <div className="navbar__blur"></div>
            <div className="inner-container navbar__container">
                <h1 className="navbar__heading">
                    <Link to="/">{heading}</Link>
                </h1>
                {renderNavigationLinks()}
            </div>
        </nav>
    )
}

export default NavBar;