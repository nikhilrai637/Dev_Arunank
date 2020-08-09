import React, { Component } from "react";
import "./App.style.scss";
import sample from "./sample.jpg";
import {connect} from "react-redux";

class App extends Component {
  render() {
    const dataItem = this.props.data.map((item, index) => (
      <li key={index}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </li>
    ));

    return (
    <div>
        <h1 className="title">hello world</h1>
        <h2>This is from the Continuos integration</h2>
        <img src={sample} />
        <h1>{this.props.count}</h1>
        <button
          onClick={() => {
            this.props.increase();
          }}
        >
          increase
        </button>
        <button
          onClick={() => {
            this.props.fetchPosts();
          }}
        >
          Fetch Posts
        </button>
        <ul>{dataItem}</ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    count: state.count,
    data: state.data
  }
} 
const mapDispatchToProps = dispatch => {
  return {
    increase: () => dispatch({type: "INCREASE_COUNT"}),
    fetchPosts: () => dispatch({type: "FETCH_POSTS"})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




