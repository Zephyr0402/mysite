import React from "react";
import SectionAboutMe from "./SectionAboutMe";
import SectionEducation from "./SectionEducation";
import SectionWorkexperience from "./SectionWorkexperience";

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        {}
        <SectionAboutMe></SectionAboutMe>
        {}
        <SectionEducation></SectionEducation>
        {}
        <SectionWorkexperience></SectionWorkexperience>
        {}
      </div>
    );
  }
}

export default Main;
