import React from "react";

class Section_workexperience extends React.Component {
  render() {
    return (
      <section id="workexperience">
        <h2>Work Experience</h2>
        <div className="row">
          <article className="6u 12u$(xsmall) work-item">
            <a href="images/fulls/RedHat-cover.jpg" className="image fit thumb">
              <img src="images/thumbs/RedHat-cover.jpg" alt />
            </a>
            <h3>Red Hat, Inc</h3>
            <p>Quality Engineering Intern</p>
            <p>2019.07 - 2020.06</p>
          </article>
          <article className="6u 12u$(xsmall) work-item">
            <a href="images/fulls/XDF-cover.jpg" className="image fit thumb">
              <img src="images/thumbs/XDF-cover.jpg" alt />
            </a>
            <h3>New Oriental Education & Technology Group, Inc.</h3>
            <p>Teaching Assistant</p>
            <p>2016.09 - 2017.01</p>
          </article>
        </div>
      </section>
    );
  }
}

export default Section_workexperience;
