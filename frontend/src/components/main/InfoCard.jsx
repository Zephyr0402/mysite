import React from 'react';
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const InfoCard = (props) => {

    return (
        <Col>
            <a style={{ cursor: 'pointer' }} onClick={() => {
                window.open(props.item.link, "_self");
            }}> 
                <Card
                    bg={props.variant}
                    text={props.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '100%', height: '100%' }}
                    className="hover-zoom"
                >
                    <Card.Body>
                        <Card.Title>{props.item.name}</Card.Title>
                        <Card.Text>
                            <div><em>{props.item.description}</em></div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <em className="date" style={{ color: "white" }}>{props.item.startDate} - </em>
                            <em className="date" style={{ color: "white" }}>{props.item.endDate}</em>
                        </small>
                    </Card.Footer>
                </Card>
            </a>
        </Col>
    );

}

export default InfoCard;