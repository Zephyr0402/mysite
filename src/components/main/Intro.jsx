import React, { Component } from "react";

class Intro extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div id="aboutme" class="container">
                <h2>About Me</h2>
                <br />
                <p>
                    {
                        resumeData.aboutme_line1
                    }
                </p>
                <p>
                    {
                        resumeData.aboutme_line2
                    }
                </p>
                <p>
                    {
                        resumeData.aboutme_line3
                    }
                </p> 
            </div>
        );
      }
}

export default Intro;