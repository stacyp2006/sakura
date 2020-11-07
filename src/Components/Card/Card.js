import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
  return (
    <div id={props.id} className='plant-card'>
      <nav className='card-info'>
        <Link to={'/plant/' + props.id}>
          <img className='plant-photo' src={props.image} alt= {props.commonName}/>
          <h2>{props.commonName}</h2>
          <h2 className='scientific-name'>{props.scientificName}</h2>
        </Link>
      </nav>
    </div>
  )
}

//Add buttons when ready for the functionality

export default Card;
