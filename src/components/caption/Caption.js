import React from 'react';

import "./caption.scss";

import ImgComponent from '../imgComponent/ImgComponent';
import SelectsBlock from '../selects-block/SelectsBlock';

export default class Caption extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			fromTo : ['Выберите город', 'Харьков', 'Кириловка', 'Скадовск', 'Лазурное'],
			fromWhere : ['Выберите город', 'Харьков', 'Кириловка', 'Скадовск', 'Лазурное'],
			where : ['Выберите город', 'Харьков', 'Кириловка', 'Скадовск', 'Лазурное'],
			valueOne : 0,
			valueTwo : 0,
			showSelect: false
		}
	}

	handleSelectChange(event){
		//console.log(this.state.fromWhere[event.target.value], this.state.showSelect);

		event.target.name === "from-where" ?
			this.setState({valueOne: event.target.value}) :
			this.setState({valueTwo: event.target.value});

		if( event.target.name === "from-where" ) {
			//console.log(event.target.value, this.state.showSelect);
			+event.target.value !== 0 ?
				this.setState({showSelect: true}) :
				this.setState({showSelect: false})
		}
	}

    render(){
        return(
            <div>
				<div className='from-to'>
					<div className="caption-wrap">
						<h2 className="caption">Пассажирские перевозки</h2>
						<p className="legend">
							Автобусные пассажирские перевозки нашим комфортабельным автобусом доставят вам удовольствие от поездки.
							Время в пути пройдет незаметно благодаря уютной обстановке салона и приветливому водителю.
						</p>
					</div>
					<div className="caption-img">
						<ImgComponent src="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg"/>
					</div>
				</div>
				<div>
					<label>{this.state.fromWhere[this.state.valueOne]}</label>
					<SelectsBlock
						name="from-where"
						value={this.state.valueOne}
						fromWhere={this.state.fromWhere}
						onChange={this.handleSelectChange.bind(this)}
					/>
					<label>{this.state.fromWhere[this.state.valueTwo]}</label>
					<SelectsBlock
						className={ this.state.showSelect ? 'd-block' : 'd-none' }
						name="where"
						value={this.state.valueTwo}
						fromWhere={this.state.fromWhere}
						onChange={this.handleSelectChange.bind(this)}
					/>
				</div>
            </div>
        )
    }
}