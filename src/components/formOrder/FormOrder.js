import React from 'react';

import "./form-order.scss";

import ModalForm from '../modalForm/ModalForm';
import Button from '../button/Button';
import Input from '../input/Input';
import ErrorMessage from '../errorMessage/ErrorMessage';

export default class FormOrder extends React.Component {

    sendOrderForm(e) {
        console.log("sendOrderForm")
    }

    onChangeValue(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <Input type="text" name="firstName" placeholder="Имя" onChange={this.onChangeValue}/>
                        <ErrorMessage text='Введите имя'/>
                    </div>
                    <div className="form-group">
                        <Input type="text" name="lastName" placeholder="Фамилия" onChange={this.onChangeValue}/>
                        <ErrorMessage text='Введите Фамилию' />
                    </div>
                    <div className="form-group">
                        <Input type="phone" name="phone" placeholder="Телефон" onChange={this.onChangeValue}/>
                        <ErrorMessage text='Введите номер телефона' />
                    </div>
                    <div className="form-group">
                        <Input type='date' className="date" name="date" placeholder="Дата отправления" onChange={this.onChangeValue}/>
                        <ErrorMessage text='Введите дату' />
                    </div>
                    <div className="form-group col-sm">
                        <label>Количество мест:</label>
                        <Input type="text" name="number" placeholder="0" onChange={this.onChangeValue}/>
                        <ErrorMessage text='Не корректное количество мест' />
                    </div>
                    <div className="btn-block">
                        <Button
                            text="Заказать билет"
                            type="button"
                            className="btn"
                            id="buy-ticket"
                            onClick={this.sendOrderForm}
                        />
                    </div>
                </form>
                <ModalForm />
            </>
        )
    }
}