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
import { Routes, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import DishDetail from "./DishDetailCompoent";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
// this.state = {
//   dishes: DISHES,
//   comments: COMMENTS,
//   promotions: PROMOTIONS,
//   leaders: LEADERS,
// };
class Main extends Component {
  constructor(props) {
    super(props);
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
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={
                  this.props.promotions.filter((promo) => promo.featured)[0]
                }
                leader={
                  this.props.leaders.filter((leader) => leader.featured)[0]
                }
              />
            }
          />
          {/* <Route path='/menu/:dishId' element={DishWithId} /> */}
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.props.dishes} />}
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
export default (connect(mapStateToProps)(Main));
