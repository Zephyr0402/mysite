import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Updating from "./Updating"

class SectionWorkexperience extends React.Component {
  render() {
    return (
      <Router>
      <section id="workexperience">
        <h2>Work Experience</h2>
        <div className="row">
          <article className="6u 12u$(xsmall) work-item">
            <Link to="/Updating">
              <a className="image fit thumb">
                <img src="images/thumbs/RedHat-cover.jpg" alt="" />
              </a>
            </Link>
            <h3>Red Hat, Inc</h3>
            <p>Quality Engineering Intern</p>
            <p>2019.07 - 2020.06</p>
          </article>
          <article className="6u 12u$(xsmalsl) work-item">
            <a href="/" className="image fit thumb">
              <img src="images/thumbs/XDF-cover.jpg" alt="" />
            </a>
            <h3>New Oriental Education & Technology Group, Inc.</h3>
            <p>Teaching Assistant</p>
            <p>2016.09 - 2017.01</p>
          </article>
          </div>
          <Switch>
          <Route path="/Updating">
            <Updating />
          </Route>
        </Switch>
        </section>
        </Router>
    );
  }
}

export default SectionWorkexperience;
