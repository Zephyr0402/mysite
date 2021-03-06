import React, { Component } from "react";

class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <footer id="links" className='footer mt-auto py-3 bg-dark text-white'>
          <div className="container">
            <a>Let's stay connected:</a>
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                )
              })
            }
          </div>
        </footer>
      
    );
  }
}

export default Footer;
