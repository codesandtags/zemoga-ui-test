import React from 'react';
import './NavBar.scss';

const NavBar = ({ navigation, heading }) => {
    const renderNavigationLinks = () => {
        const links = navigation.links.map((item) => {
            return (
                <li className="navbar__link">
                    <a href={item.link}>{item.label}</a>
                </li>
            )
        });

        return (
            <ul className="navbar__navigation">
                {links}
                <li className="navbar__link">
                    <a href="#"><span className="fas fa-search"></span></a>
                </li>
            </ul>
        )
    };

    return (
        <nav className="navbar">
            <div htmlFor="hamburger" className="hamburger-menu">
                <span className="hamburger-menu__slice"></span>
                <span className="hamburger-menu__slice"></span>
                <span className="hamburger-menu__slice"></span>
            </div>

            <div className="navbar__blur"></div>
            <div className="inner-container navbar__container">
                <h1 className="navbar__heading">
                    {heading}
                </h1>
                {renderNavigationLinks()}
            </div>
        </nav>
    )
}

export default NavBar;