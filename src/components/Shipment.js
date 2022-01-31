import React from "react";

class Shipment extends React.Component {
  render() {
    return (
      <div className="total">
        <div className="total_wrap">
          <div className="total_wrap-final">Total: {total}€</div>
        </div>
      </div>
    );
  }
}


export default Shipment;