import React from 'react';

import "./selects-block.scss";

export default class SelectsBlock extends React.Component {
	render(){
		const { className='', name , fromWhere, onChange } = this.props;
		return(
			<select className={className} name={name} onChange={onChange}>
				{
					fromWhere.map(
						(el,ind) => <option value={ind} key={ind}>{el}</option>
					)
				}
			</select>
		)
	}
}