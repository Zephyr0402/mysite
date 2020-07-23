import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://github.com/Zephyr0402"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/shijun-shen-aabb5a179"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:shijun.shen@alumni.ubc.ca"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>© 2020</li>
            <li>
              Design: <a href="http://html5up.net">HTML5 UP</a>
            </li>
            <li>Powered by <a href="https://reactjs.org/">React</a> + <a href="https://flask.palletsprojects.com/">Flask</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
