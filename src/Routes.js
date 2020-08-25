import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./components/containers/Home/Home";
import Domains from "./components/containers/Domains/Domains";
import history from "./History";
import Error from "./Error";
import { Provider } from "react-redux";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <div>
            <Switch>
      <Route path = "/Get_Start" component = {Domains}/> 
      <Route path = "/home" component = {Home}/>
      <Route component = {Error}/>
      {/* <Route path = "/Question_List" component = {QuestionRoute} /> */}
      </Switch>
            </div>
          </Router>
          </ThemeProvider>
        </Provider>
      </div>
    );
  }
}
