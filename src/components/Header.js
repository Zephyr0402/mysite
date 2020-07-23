import React from "react";
import Footer from "./Footer"

class Header extends React.Component {
  render() {
    return (
      
      <header id="header">
        <div className="inner">
          <a href="/" className="image avatar">
            <img src="images/avatar.jpg" alt="" />
          </a>
          <h1>
            <strong>Hello, I am Shijun Shen.</strong>
            <br />
            Welcome to my personal webpage!
            <br />
          </h1>
        </div>
        <Footer></Footer>
      </header>
    );
  }
}

export default Header;
