import React from 'react';
import Card from "react-bootstrap/Card";

const InfoCard = (props) => {
    return (
        <div class="col-sm-12 col-lg-4">
            <div class="card mb-4 shadow-sm h-100">
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Text>
                        <div><em>{props.item.description}</em></div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        <em className="date">{props.item.startDate}</em>
                        -
                        <em className="date">{props.item.endDate}</em>
                    </small>
                </Card.Footer>
            </div>
        </div>
    );

}

export default InfoCard;