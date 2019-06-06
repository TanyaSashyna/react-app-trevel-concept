import React from 'react';
import { Link } from "react-router-dom";

import "./sidebar.scss";

export default class Sidebar extends React.Component {
    render(){
        return(
            <div className={`sidebar ${this.props.className}`} id="sidebar">
                <div className="user-info">
                    <div className="avatar"></div>
                    <p className="userName">User Name</p>
                </div>

                <div className="nav-list">
                    <ul>
                        <li className="link">
                            <Link to="/profile" className="profile">Профиль</Link>
                        </li>
                        <li className="link">
                            <span>Пассажирские перевозки</span>
                            <ul className="submenu">
                                <li>
                                    <Link to="/taxi">Такси</Link>
                                </li>
                                <li>
                                    <Link to="/transfer" id="intercity">Междугородние</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="link">
                            <Link to="/history">История</Link>
                        </li>
                        <li className="link">
                            <Link to="/sale">Скидки</Link>
                        </li>
                        <li className="link">
                            <Link to="/settings" className="settings">Настройки</Link>
                        </li>
                        <li className="link">
                            <Link to="/contact">Контакты</Link>
                        </li>
                    </ul>
                </div>
                <div className="logout-block">
                    <button type="button" className="btn-logout">
                        <img src="img/logout.svg" alt="logout"/>
                    </button>
                </div>
            </div>
        )
    }
}