import React from 'react';

import "./about-way.scss";

export default class AboutWay extends React.Component {
    render(){
        return(
            <div className="way-content">
				<button type="button" className="btn back" id="back">
					<span>&larr;</span>
				</button>
				<h1 className="way-head">
					Харьков - Кириловка
				</h1>
				<div className="way-img">
					<img src="https://yastrub-tour.com.ua/images/fedot.jpg" className="picture" alt=""/>
				</div>
				<div className="way-info">
					<h4>Автобусные рейсы: <span className="when">Ежедневно</span></h4>
					<div className="way-time">Время отправления: <span className="time">22:00</span></div>
					<div className="way-where">Место отправления: <span className="where">ЖД вокзал</span></div>
					<div className="arrival">Прибытие: <span className="city-time">Кириловка 07:00</span></div>
					<div className="price">400 грн</div>
					<div className="btn-wrap">
						<button type="button" className="btn" id="buy-btn">
							Заказать
						</button>
					</div>
				</div>
			</div>
        )
    }
}