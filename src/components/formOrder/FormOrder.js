import React from 'react';

import "./form-order.scss";

import ModalForm from '../modalForm/ModalForm';

export default class FormOrder extends React.Component {
    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <input type="text" name="firstName" placeholder="Имя" />
                        <span className="error">Введите имя</span>
                    </div>
                    <div className="form-group">
                        <input type="text" name="lastName" placeholder="Фамилия" />
                        <span className="error">Введите Фамилию</span>
                    </div>
                    <div className="form-group">
                        <input type="phone" name="phone" placeholder="Телефон" />
                        <span className="error">Введите номер телефона</span>
                    </div>
                    <div className="form-group">
                        <input className="date" name="date" placeholder="Дата отправления" />
                        <span className="error">Выберете дату</span>
                    </div>
                    <div className="form-group col-sm">
                        <label>Количество мест:</label>
                        <input type="text" name="number" placeholder="0" value="1" />
                        <span className="error">Не корректное количество мест</span>
                    </div>
                    <div className="btn-block">
                        <button type="button" className="btn" id="buy-ticket">Заказать билет</button>
                    </div>
                </form>
                <ModalForm />
            </>
        )
    }
}