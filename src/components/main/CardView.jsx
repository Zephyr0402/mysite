import React from 'react';
import InfoCard from './InfoCard';

const CardView = (props) => {

    console.log(props.cardInfos);

    return (
        <div className="container">
            <h2>{props.cardViewTitle}</h2>
            <br></br>
            <div class="card-deck">
                {
                    props.cardInfos && props.cardInfos.map((item) => {
                        console.log(item);
                        return (
                            <InfoCard item={item}></InfoCard>
                        )
                    })
                }
            </div>
            <br></br>
        </div>
    );
}

export default CardView;