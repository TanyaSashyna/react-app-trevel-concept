import React from 'react';

import "./setting-page.scss";

export default class SettingPage extends React.Component {
    render() {
        return (
            <div className="main">
                <form>
                    <div class="user-avatar">
                        <label for="avatarFile" class="avatar" id="avatar-img"></label>
                        <input type="file" name="avatar" id="avatarFile" class="input-avatar" />
                    </div>
                    <form class="info">
                        <div class="form-group">
                            <label className="label-input">Имя:</label>
                            <input type="text" name="firstName" placeholder="Имя" />
                            <span class="error">Введите имя</span>
                        </div>
                        <div class="form-group">
                            <label className="label-input">Фамилия:</label>
                            <input type="text" name="lastName" placeholder="Фамилия" />
                            <span class="error">Введите Фамилию</span>
                        </div>
                        <div class="form-group">
                            <label className="label-input">Телефона:</label>
                            <input type="phone" name="phone" placeholder="Телефон" />
                            <span class="error">Введите номер телефона</span>
                        </div>
                        <div class="form-group">
                            <label className="label-input">Город:</label>
                            <input type="text" name="city" placeholder="Город" />
                            <span class="error">Введите город</span>
                        </div>
                        <div class="btn-block">
                            <button type="button" class="btn" id="save">Сохранить</button>
                        </div>
                    </form>
                </form>
            </div>
        )
    }
}