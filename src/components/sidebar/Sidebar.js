import React from 'react';

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
                            <a href="/profile" className="profile">Профиль</a>
                        </li>
                        <li className="link">
                            <span>Пассажирские перевозки</span>
                            <ul className="submenu">
                                <li>
                                    <a href="/">Такси</a>
                                </li>
                                <li>
                                    <a href="/transfer" id="intercity">Междугородние</a>
                                </li>
                            </ul>
                        </li>
                        <li className="link">
                            <a href="/">История</a>
                        </li>
                        <li className="link">
                            <a href="/">Скидки</a>
                        </li>
                        <li className="link">
                            <a href="/settings" className="settings">Настройки</a>
                        </li>
                        <li className="link">
                            <a href="/">Контакты</a>
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