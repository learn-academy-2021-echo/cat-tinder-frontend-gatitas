import React, { Component } from 'react';

export default class CatShow extends Component {
  render() {
    console.log(this.props.cat)
    const { cat } = this.props
    return(
      <>
      <h2>Cat Show Page</h2>
      <p>{cat.name}</p>
      <p>{cat.age}</p>
      <p>{cat.enjoys}</p>
      {cat.image &&
      <img scr={cat.image} alt="awesome cat pic" width=" 300px" />
      }
      </>
    )
  }
}
