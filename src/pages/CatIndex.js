import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../components/Header.css";

export default class CatIndex extends Component {
  render() {
    return (
      <div id="background-image">
        <h2>Cat Index Page</h2>
        {this.props.cats &&
          this.props.cats.map((cat) => {
            return (
              <NavLink to={`/catshow/${cat.id}`} key={cat.id}>
                <p>{cat.name}</p>
              </NavLink>
            );
          })}
      </div>
    );
  }
}
