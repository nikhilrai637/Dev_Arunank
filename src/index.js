import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { createStore, applyMiddleware } from "redux";
import RootReducer from './reducers/RootReducer';
import { fetchPosts } from './RootSaga';
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchPosts);
ReactDOM.render(<Routes store={store}/>, document.getElementById("app"));