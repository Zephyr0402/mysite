import React from "react";

const Intro = (props) => {
    let resumeData = props.resumeData;
    return (
        <div id="aboutme" className="container">
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

export default Intro;