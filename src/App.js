import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatEdit from "./pages/CatEdit";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import CatShow from "./pages/CatShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import cats from "./mockCat";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
    };
  }
  componentDidMount() {
    this.readCat();
  }
  readCat = () => {
    fetch("http://localhost:3000/cats")
      .then((response) => response.json())
      // set the state with the data from the backend into the empty array
      .then((catsArray) => this.setState({ cats: catsArray }))
      .catch((errors) => console.log("Cat read errors:", errors));
  };

  createCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      // converting an object to a string
      body: JSON.stringify(newCat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.readCat())
      .catch((errors) => console.log("Cat create errors:", errors));
  };

  updateCat = (cat, id) => {
    console.log("cat name", cat);
    console.log("id of cat", id);
    fetch(`http://localhost:3000/cats/${id}`, {
      // converting an object to a string
      body: JSON.stringify(cat),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readCat())
      .catch((errors) => console.log("Cat update errors:", errors));
  };

  deleteCat = (id) => {
    console.log(id);
    fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.readCat())
      .catch((errors) => console.log("delete errors:", errors));
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/catindex"
            render={(props) => <CatIndex cats={this.state.cats} />}
          />

          <Route
            path="/catnew"
            render={(props) => <CatNew createCat={this.createCat} />}
          />
          <Route
            path="/catedit/:id"
            render={(props) => {
              let catId = +props.match.params.id;
              let cat = this.state.cats.find((cat) => cat.id === catId);

              return <CatEdit cat={cat} updateCat={this.updateCat} />;
            }}
          />
          <Route
            path="/catshow/:id"
            render={(props) => {
              let id = props.match.params.id;
              let cat = this.state.cats.find((cat) => cat.id === +id);
              return <CatShow cat={cat} deleteCat={this.deleteCat} />;
            }}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
