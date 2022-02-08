import React, { Component } from "react";
import "../pages/Home.css";

export default class Home extends Component {
  render() {
    return (
      <div id="home-background">
        <h1 style={{ color: "red" }}>Cat Tinder</h1>
        {/* <img
          href="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="cat glasses"
        /> */}
      </div>
    );
  }
}
