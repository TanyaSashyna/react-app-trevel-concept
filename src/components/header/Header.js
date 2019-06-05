import React from 'react';

import "./header.scss";

import Sidebar from '../sidebar/Sidebar';
import Button from '../button/Button';
import ImgComponent from '../imgComponent/ImgComponent';

const menuSm = [
    {id: 1, href: "/profile", className: "profile icon", src: "img/profile.svg", alt: "profile"},
    {id: 2, href: "/settings", className: "settings icon", src: "img/settings.svg", alt: "settings"}
];

export default class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {showSidebar: false};

        this.showSidebar = this.showSidebar.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext){
        // this the cicle for me for check
        nextState.showSidebar ? console.log('I am true') : console.log('I am false');
        return true;
    }

    showSidebar(e){
        this.setState({showSidebar: !this.state.showSidebar})
    }

    render(){
        return(
            <>
                <header>
                <nav>
                    <Button
                        type="button"
                        className='burger menu-off'
                        // classNameShow={this.state.showSidebar ? 'menu-on' : 'menu-off'}
                        id='burger'
                        onClick={this.showSidebar}
                        classNameIcon='menu-icon'/>

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
                <Sidebar className={this.state.showSidebar ? 'open' : 'close'}/>
            </>
        )
    }
}