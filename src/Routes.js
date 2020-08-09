import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import history from "./History";
import Error from "./Error";
import { Provider } from "react-redux";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          <Router history={history}>
            <div>
              <Switch>
                <Route path="/" component={App} exact />
                <Route component={Error} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}
