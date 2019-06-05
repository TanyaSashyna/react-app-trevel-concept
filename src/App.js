import React from 'react';

import Caption from './components/caption/Caption';
import Header from './components/header/Header';
// import Sidebar from './components/sidebar/Sidebar';

export default class App extends React.Component {
  render() {
    return (
        <div className="center">
          <Header/>
          {/*<Sidebar/>*/}
          <Caption/>
        </div>)
  }
}
