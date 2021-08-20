import React from "react";
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = (props) => {

    return (
        <div id="aboutme" className="container">
            
            {/* <h2 style={{color: "white"}}>About Me</h2> */}
            <br />
            <br />
            <div className="container">
                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                        <Image src="resources/avatar.png" roundedCircle />
                    </Col>
                    <Col style={{ color: "white" }} xs={6} md={6}>
                        <p>
                            {
                                props.introInfo === null ? "" : props.introInfo.aboutme_line1
                            }
                        </p>
                        <p>
                            {
                                props.introInfo === null ? "" : props.introInfo.aboutme_line2
                            }
                        </p>
                        <p>
                            {
                                props.introInfo === null ? "" : props.introInfo.aboutme_line3
                            }
                        </p>
                    </Col>
                </Row>
            </div>
            
            
        </div>
    );
}

export default Intro;