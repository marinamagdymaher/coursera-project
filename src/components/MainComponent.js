import React, { Component } from "react";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { DISHES } from "../shared/Dishes";
import { COMMENTS } from "../shared/Comments";
import { LEADERS } from "../shared/Leaders";
import { PROMOTIONS } from "../shared/Promotions";
import { Routes, Route } from "react-router-dom";
import DishDetail from "./DishDetailCompoent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <Home
                dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.state.promotions.filter((promo) => promo.featured)[0]
                }
                leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          {/* <Route path='/menu/:dishId' element={DishWithId} /> */}
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/details/:id" element={<DishDetail />} />
          <Route path={"*"} element={<Home />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default Main;
