import React from "react";

class Shipment extends React.Component {
  render() {
    const { total } = this.props;
    const shipping = total > 0 && total < 20 ? 3.5 : 0.99;
    const shippingNeon =
      shipping === 0.99 ? (
        <span className="font-effect-neon total_wrap-cheap">{shipping}€</span>
      ) : (
        <span>{shipping}€</span>
      );
    return (
      <div className="total">
        <div className="total_wrap">
          <div>
            <div>Delivery cost: {total > 0 ? shippingNeon : null}</div>
            <div className="total_wrap-free">{total < 20 ? `Order for ${20 - total} more euros and get delivery for 0.99 euros` : null}</div>
          </div>
          <div className="total_wrap-final">Total: {total}€</div>
        </div>
      </div>
    );
  }
}

export default Shipment;
