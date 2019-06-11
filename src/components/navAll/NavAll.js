import React from "react";

import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';

export default class NavAll extends React.Component {
    constructor(props){
        super(props);

        this.state = {showSidebar: false};

        this.showSidebar = this.showSidebar.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext){
        // this the cicle for me for check
        nextState.showSidebar ? console.log('I am true') : console.log('I am false');
        return true;
    }

    showSidebar(e){
        this.setState({showSidebar: !this.state.showSidebar})
    }

    render(){
        return(
            <>
            <Header  onClick={this.showSidebar}/>
            <Sidebar className={this.state.showSidebar ? 'open' : 'close'}/>
            </>
        )
    }
}