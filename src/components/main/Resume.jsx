import React from "react";
import Card from "react-bootstrap/Card";

const Resume = (props) => {
    let resumeData = props.resumeData;
    return (
        <div id="resume" className="container">
            <h2>{resumeData.title}</h2>
            <br />
            <div class="card-deck">
                {
                    resumeData.data && resumeData.data.map((item) => {
                        return (
                            <div className="col-sm-12 col-lg-4">
                                <div className="card mb-4 shadow-sm h-100">
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

export default Resume;