import React from 'react';
import './App.style.scss';
import Home from './containers/Home/Home'
import {Route,Switch} from 'react-router-dom'
// import QuestionRoute from './QuestionView/QuestionRoute.js'
import Domains from './containers/Domains/Domains';
 
 
function App() {
  return (
   
    <div>    
      <Switch>
      <Route path = "/home/Get_Start" component = {Domains}/> 
      <Route path = "/home" component = {Home}/>
      {/* <Route path = "/Question_List" component = {QuestionRoute} /> */}
      </Switch>
      </div>
  
    
  );
}

export default App;
