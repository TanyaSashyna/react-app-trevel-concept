import React from 'react';

export default class Button extends React.Component {
    render(){
        const { text = false, type, className, id, onClick, classNameIcon } = this.props;
        return(
            <button type={type} className={className} id={id} onClick={onClick}>
            {classNameIcon && <i className={classNameIcon}></i>}
        {text ? text : null}
    </button>
        )
    }
}