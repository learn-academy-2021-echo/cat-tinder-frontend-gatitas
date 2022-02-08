import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";

export default class CatShow extends Component {
  render() {
    console.log(this.props.cat);
    const { cat } = this.props;
    return (
      <>
        <h2>Cat Show Page</h2>
        {cat && (
          <>
            <div>
              <p>{cat.name}</p>
              <p>{cat.age}</p>
              <p>{cat.enjoys}</p>
              <img src={cat.image} alt="awesome cat pic" width=" 300px" />
            </div>
            <div>
              <NavLink to={`/catedit/${cat.id}`}>
                <Button>Edit Cat Profile</Button>
              </NavLink>
              <NavLink to="/catindex">
                <Button onClick={() => this.props.deleteCat(cat.id)}>
                  Delete Cat
                </Button>
              </NavLink>
            </div>
          </>
        )}
      </>
    );
  }
}
