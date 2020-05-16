import React from 'react';
import './Footer.scss';

const Footer = ({ content }) => {
    const getLinks = () => {
        return content.links.map((item) => {
            return (
                <li className="footer__link">
                    <a href={item.link}>{item.label}</a>
                </li>
            )
        });
    };

    const getSocialNetWorks = () => {
        return content.socialNetworks.map((item) => {
            if (!item.icon) {
                return (
                    <li className="footer__network">
                        <a href={item.link}>{item.label}</a>
                    </li>
                )
            }

            const iconClassName = `fab fa-${item.icon}`;
            return (
                <li className="footer__network">
                    <a href={item.link}><span className={iconClassName}></span></a>
                </li>
            )
        });
    };

    return (
        <footer className="footer">
            <ul className="footer__links">
                {getLinks()}
            </ul>
            <ul className="footer__social-networks">
                {getSocialNetWorks()}
            </ul>
        </footer>
    )
}

export default Footer;