import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <div className="wrap">
          <div className="header-content">
            <div className="header-rating">
              <div className="header-rating_tag">Rating: </div>
              <div className="header-rating_icon">+++</div>
            </div>
            <div className="header-divider"></div>
            <h1 className="font-effect-fire-animation">Hot Burgers</h1>
            <h3>
                <span>
                    Hot <span className="sub-header">burgers</span> fast delivery 
                </span>
            </h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
