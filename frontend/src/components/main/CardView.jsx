import React from 'react';
import InfoCard from './InfoCard';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const CardView = (props) => {

    const openLink = (externalLink) => {
        //window.open(externalLink);
    };

    return (
        <Container>
            <h2 style={{ color: "black" }}>{props.cardViewTitle}</h2>
            <br />
            <Container>
                {
                    props.cardInfos && props.cardInfos.map((item) => {
                        return (
                            <Container>
                                <Row>
                                    <InfoCard item={item} variant={'success'} onClick={openLink(item.link)}></InfoCard>
                                </Row>
                                <br />
                            </Container>

                        )
                    })
                }
            </Container>
            <br />
        </Container>
    );
}

export default CardView;