import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from './components/main/Main';
import Count from "./containers/Count";
import Caption from './components/caption/Caption';

export default class App extends React.Component {
  render() {
    return (
        <>
            <Switch>
                <Route exact path="/counter" component={Count} />
                <Route exact path="/" component={Main} />
                <Route
                    path="/profile"
                    render={props => {
                        return <div>profile Page, Hello</div>;
                    }}
                />
                <Route
                    path="/settings"
                    render={props => {
                        return <div>settings Page</div>;
                    }}
                />
                {/*<Route path="/transfer" component={Caption} />*/}
                <Route path="/transfer" component={Caption} />
                <Route
                    path="/taxi"
                    render={props => {
                        return <div>Taxi Page</div>;
                    }}
                />
                <Route
                    path="/history"
                    render={props => {
                        return <div>History Page</div>;
                    }}
                />
                <Route
                    path="/sale"
                    render={props => {
                        return <div>Sale Page</div>;
                    }}
                />
                <Route
                    path="/contact"
                    render={props => {
                        return <div>Contact Page</div>;
                    }}
                />
            </Switch>
        </>
    )
  }
}
