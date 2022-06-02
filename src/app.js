import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import ProductForm from "./components/productForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/products/:id" component={ProductForm} />
            <Route path="/products" component={Products} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Redirect from="/" exact to="/products" />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
