import React from "react";
import Shipment from "./Shipment";

class Order extends React.Component {
  renderOrder = (key) => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];

    const isAvailable = burger && burger.status === "available";

    if (!burger) return null;
    if (!isAvailable) {
      return (
        <li className="unavailable" key={key}>
          Sorry, {burger ? burger.name : "burger"} is temporarily unavailable
        </li>
      );
    }
    return (
      <li key={key}>
        <span>
          <span>{count}pcs</span> {burger.name}
          <span> {count * burger.price}€</span>
          <button className="cancelItem">&times;</button>
        </span>
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key];

      const isAvailable = burger && burger.status === "available";
      if (isAvailable) {
        return prevTotal + burger.price * count;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        {total > 0 ? (
          <Shipment total={total}/>
        ) : (
          <div className="nothingSelected">Choose something and add to order</div>
        )}
      </div>
    );
  }
}

export default Order;
