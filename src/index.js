import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
 
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import {BrowserRouter as Router} from 'react-router-dom'
// import store from './Redux/store'
import {Provider} from 'react-redux'
ReactDOM.render(
//   <Provider store = {store}>
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router> 
     
    <App />
    </Router>  
    </ThemeProvider>    
  </React.StrictMode>
    // </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change


// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
 
