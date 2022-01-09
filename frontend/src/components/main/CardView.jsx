import React from 'react';
import InfoCard from './InfoCard';

const CardView = (props) => {

    console.log(props.cardInfos);

    const openLink = (externalLink) => {
        //window.open(externalLink);
    };

    return (
        <div className="container">
            <h2 style={{ color: "white" }}>{props.cardViewTitle}</h2>
            <br/>
            <div className="card-deck">
                {
                    props.cardInfos && props.cardInfos.map((item) => {
                        console.log(item);
                        return (
                            <InfoCard item={item} variant={"primary"} onClick={openLink(item.link)}></InfoCard>
                        )
                    })
                }
            </div>
            <br/>
        </div>
    );
}

export default CardView;