import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

export default class CatEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editCat: {
        name: this.props.cat.name,
        age: this.props.cat.age,
        enjoys: this.props.cat.enjoys,
        image: this.props.cat.image,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { editCat } = this.state;
    editCat[e.target.name] = e.target.value;
    // setting state to the updated form content
    this.setState({ editCat: editCat });
  };

  handleSubmit = () => {
    this.props.updateCat(this.state.editCat);
    this.setState({ submitted: true });
  };

  render() {
    console.log(this.state.editCat.name);
    return (
      <>
        <h2>Edit Cat Information</h2>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              name="name"
              placeholder={this.state.editCat.name}
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="age">Age</Label>
            <Input
              name="age"
              placeholder={this.state.editCat.age}
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="enjoys">Enjoys</Label>
            <Input
              name="enjoys"
              placeholder={this.state.editCat.enjoys}
              type="text"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="image">Update Image URL</Label>
            <Input name="image" type="url" onChange={this.handleChange} />
          </FormGroup>
          <Button name="submit" onClick={this.handleSubmit}>
            Update Profile
          </Button>
        </Form>

        {this.state.submitted && (
          <Redirect to={`/catshow/${this.props.cat.id}`} />
        )}
      </>
    );
  }
}
