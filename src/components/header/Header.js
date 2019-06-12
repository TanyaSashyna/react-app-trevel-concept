import React from 'react';
import { Link } from "react-router-dom";

import "./header.scss";


import Button from '../button/Button';
import ImgComponent from '../imgComponent/ImgComponent';

const menuSm = [
    { id: 1, path: "/profile", className: "profile icon", src: "img/profile.svg", alt: "profile"},
    { id: 2, path: "/settings", className: "settings icon", src: "img/settings.svg", alt: "settings"}
];

export default class Header extends React.Component {
    showSidebar(e){
        this.setState({showSidebar: !this.state.showSidebar})
    }

    render(){
        //console.log(this.props);
        return(
            <>
                <header>
                    <nav>
                        <Button
                            type="button"
                            className='burger menu-off'
                            id='burger'
                            onClick={this.props.onClick}
                            classNameIcon='menu-icon'/>

                        <Link to="/" className="logo">
                            <ImgComponent src="img/logo.svg" alt='logo'/>
                            <span>Travel</span>
                        </Link>
                        <ul className="menu-sm">
                            {
                                menuSm.map(el =>
                                    <li key={el.id}>
                                        <Link to={el.path} className={el.className}>
                                            <ImgComponent src={el.src} alt={el.alt} />
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}