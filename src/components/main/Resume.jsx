import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div id="resume" class="container">
                <h2>{resumeData.title}</h2>
                <br />
                <div class="card-deck">
                    {
                        resumeData.data && resumeData.data.map((item) => {
                            return (
                                <div class="col-sm-12 col-lg-4">
                                    <div class="card mb-4 shadow-sm h-100">
                                        <Card.Body>
                                            <Card.Title>{item.NameOfInstitution}</Card.Title>
                                            <Card.Text>
                                                <div><em>{item.Title}</em></div>                                            
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted"><em className="date">{item.MonthOfStarting} {item.YearOfStarting}</em> - <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></small>
                                        </Card.Footer>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
    
};

export default Resume;