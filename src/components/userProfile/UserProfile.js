import React from 'react';

import "./user-profile.scss";


export default class UserProfile extends React.Component {
    render() {
        return (
            <div className="main">
                <div class="user-profile">
                    <div class="user-avatar">
                        <div class="avatar" id="avatar"></div>
                    </div>
                    <div class="info">
                        <div class="item">
                            <label>Имя: </label>
                            <span id="firstName">firstName</span>
                        </div>
                        <div class="item">
                            <label>Фамилия: </label>
                            <span id="lastName">lastName</span>
                        </div>
                        <div class="item">
                            <label>Телефон: </label>
                            <span id="phone">0990000000</span>
                        </div>
                        <div class="item">
                            <label>Город: </label>
                            <span id="city">Харьков</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}