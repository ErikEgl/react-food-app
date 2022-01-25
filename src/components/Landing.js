import React, { useLayoutEffect } from "react";
import restaurants from "../sample-restaurants";

class Landing extends React.Component {
  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div className="restaurant_select_top-header">Choose restaurant</div>
          <div className="arrow_picker">
            <div className="arrow_picker-up"></div>
            <div className="arrow_picker-down"></div>
          </div>
          <div className="restaurant_select">
            <ul>
              {restaurants.map((restaurant) => {
                return<li key={restaurant.id}>{restaurant.title}</li>
              })}
            </ul>
          </div>
        </div>
        <button>Go to restaurant</button>
      </div>
    );
  }
}

export default Landing;
