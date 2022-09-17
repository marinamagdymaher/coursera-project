import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/Dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {  Routes, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.state.dishes} />}
          />
          <Route path={"*"} element={<Home />} />
        </Routes>
        {/* <Redirect to="/home" /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
