import React from 'react';

import "./setting-page.scss";

import Input from '../input/Input';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Button from '../button/Button';

export default class SettingPage extends React.Component {
    onChangeValue(e) {
        console.log(e.target.value)
    }

    saveOrderForm(e) {
        console.log('saveOrderForm')
    }

    render() {
        return (
            <div className="main">
                <form>
                    <div className="user-avatar">
                        <label htmlFor="avatarFile" className="avatar" id="avatar-img"></label>
                        <input type="file" name="avatar" id="avatarFile" className="input-avatar"/>
                    </div>
                    <div className="info">
                        <div className="form-group">
                            <label className="label-input">Имя:</label>
                            <Input type="text" name="firstName" placeholder="Имя" onChange={this.onChangeValue}/>
                            <ErrorMessage text='Введите имя'/>
                        </div>
                        <div className="form-group">
                            <label className="label-input">Фамилия:</label>
                            <Input type="text" name="lastName" placeholder="Фамилия" onChange={this.onChangeValue}/>
                            <ErrorMessage text='Введите Фамилию' />
                        </div>
                        <div className="form-group">
                            <label className="label-input">Телефона:</label>
                            <Input type="phone" name="phone" placeholder="Телефон" onChange={this.onChangeValue}/>
                            <ErrorMessage text='Введите номер телефона' />
                        </div>
                        <div className="form-group">
                            <label className="label-input">Город:</label>
                            <Input type="text" name="city" placeholder="Город" onChange={this.onChangeValue}/>
                            <ErrorMessage text='Введите город' />
                        </div>
                        <div className="btn-block">
                            <Button
                                text="Сохранить"
                                type="button"
                                className="btn"
                                id="save"
                                onClick={this.saveOrderForm}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}