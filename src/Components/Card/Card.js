import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div id={props.id} className='plant-card'>
      <nav className='card-info'>
        <img className='plant-photo' src={props.image} alt= {props.commonName} photo/>
        <h2>{props.commonName}</h2>
        <h2 className='scientific-name'>{props.scientificName}</h2>
      </nav>
    </div>
  )
}

//Add buttons when ready for the functionality

export default Card;
