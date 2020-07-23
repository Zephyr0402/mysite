import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
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
                <p>
               Not single, got a lovely <a className="bf_link" href='https://junjieyang.org/'>boyfriend</a> who is studying at McGill University. :)
                </p>
                <p>
               {
                 resumeData.aboutme_line5
               }
                </p>
            </div>
         </div>
      </section>
    );
  }
}