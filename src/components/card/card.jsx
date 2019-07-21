import React from 'react';

import './card.css'

export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster1.id}?set=set2&size=180x180`}/>
        <h2> {props.monster1.name} </h2>
        <p> {props.monster1.email} </p>
    </div>
);