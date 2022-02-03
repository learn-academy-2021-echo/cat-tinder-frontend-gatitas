import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';

export default class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { newCat } = this.state
    newCat[e.target.name] = e.target.value
    // setting state to the updated form content
    this.setState({newCat: newCat})
  }

  handleSubmit = () => {
  this.props.createCat(this.state.newCat)
  this.setState({submitted: true})
  }

  render() {
    return (
      <>
      <h2>Create New Cat</h2>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            placeholder="Please enter the cat's name"
            type="text"
            onChange={this.handleChange}
          />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              name="age"
              placeholder="Please enter the cat's age"
              type="text"
              onChange={this.handleChange}
          />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              name="enjoys"
              placeholder="Please enter the cat's favorite hobbies"
              type="text"
              onChange={this.handleChange}
          />
          </FormGroup>
          <FormGroup>
            <Label for="image">Enter Image URL</Label>
            <Input
              name="image"
              type="url"
              onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          name="submit"
          onClick={this.handleSubmit}
        >
        Create a New Profile
        </Button>
      </Form>
      {this.state.submitted && <Redirect to='/catindex'/>}
      </>
    )
  }
}
