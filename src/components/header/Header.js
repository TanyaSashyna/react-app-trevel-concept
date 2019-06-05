import React from 'react';

import "./header.scss";

import ImgComponent from '../imgComponent/ImgComponent';

const menuSm = [
    {id: 1, href: "/profile", className: "profile icon", src: "img/profile.svg", alt: "profile"},
    {id: 2, href: "/settings", className: "settings icon", src: "img/settings.svg", alt: "settings"}
];

export default class Header extends React.Component {
    render(){
        return(
            <header>
                <nav>
                    <button type="button" className="burger" id="burger">
                        <i className="menu-icon"></i>
                    </button>
                    <a href="/" className="logo">
                        <ImgComponent src="img/logo.svg" alt='logo'/>
                        <span>Travel</span>
                    </a>
                    <ul className="menu-sm">
                        {
                            menuSm.map(el =>
                                <li key={el.id}>
                                    <a href={el.href} className={el.className}>
                                        <ImgComponent src={el.src} alt={el.alt} />
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            </header>
        )
    }
}