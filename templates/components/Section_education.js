import React from "react";

class Section_education extends React.Component {
  render() {
    return (
      <section id="education">
        <h2>Education</h2>
        <div className="row">
          <article className="6u 12u$(xsmall) work-item">
            <a href="images/fulls/UBC-cover.jpg" className="image fit thumb">
              <img src="images/thumbs/UBC-cover.jpg" alt />
            </a>
            <h3>
              Master of Engineering in Electrical and Computer Engineering
            </h3>
            <p>
              Department of Electrical and Computer Engineering, University of
              British Columbia
            </p>
            <p>2020 - present</p>
          </article>
          <article className="6u$ 12u$(xsmall) work-item">
            <a href="images/fulls/BJUT-cover1.jpg" className="image fit thumb">
              <img src="images/thumbs/BJUT-cover1.jpg" alt />
            </a>
            <h3>Bachelor of Engineering in Computer Science and Technology</h3>
            <p>
              Faculty of Information Technology, Beijing Unviersity of
              Technology
            </p>
            <p>2016.09 - 2020.07</p>
          </article>
          <article className="6u 12u$(xsmall) work-item">
            <a href="images/fulls/BJUT-cover2.jpg" className="image fit thumb">
              <img src="images/thumbs/BJUT-cover2.jpg" alt />
            </a>
            <h3>Bachelor of Arts in English</h3>
            <p>
              Faculty of Humanities and Social Sciences, Beijing Unviersity of
              Technology
            </p>
            <p>2018.02 - 2020.07</p>
          </article>
        </div>
        {}
      </section>
    );
  }
}

export default Section_education;
