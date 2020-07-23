import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";

import "../assets/css/font-awesome.min.css";
import "../assets/css/main.css";

import "../assets/fonts/FontAwesome.otf";
import "../assets/fonts/fontawesome-webfont.eot";
import "../assets/fonts/fontawesome-webfont.svg";
import "../assets/fonts/fontawesome-webfont.ttf";
import "../assets/fonts/fontawesome-webfont.woff";
import "../assets/fonts/fontawesome-webfont.woff2";

/*
import "../assets/sass/main.scss";
import "../assets/sass/libs/_functions.scss";
import "../assets/sass/libs/_mixins.scss";
import "../assets/sass/libs/_skel.scss";
import "../assets/sass/libs/_vars.scss";
*/

class Intropage extends React.Component {
  render() {
    return (
      <div>
        <title>Shijun Shen</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {}
        <Header></Header>
        {}
        <Main></Main>
        {}
      </div>
    );
  }
}

export default Intropage;
