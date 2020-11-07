import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div id={props.id} className='plant-card'>
      <nav>
        <img className='plant-photo' src={props.image} alt= 'plant photo'/>
        <h2>{props.commonName}</h2>
        <h2>{props.scientificName}</h2>
      </nav>
    </div>
  )
}

export default Card;
