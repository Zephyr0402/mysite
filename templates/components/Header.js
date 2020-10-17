import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src="images/avatar.jpg" alt />
          </a>
          <h1>
            <strong>Hello, I am Shijun Shen.</strong>
            <br />
            Welcome to my personal webpage!
            <br />
          </h1>
        </div>
      </header>
    );
  }
}

export default Header;
