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
      <button className='add-button' type='button'>Add to Garden Plan</button>
      <button className='remove-button' type='button'>Remove from Garden Plan</button>
    </div>
  )
}

//Add buttons when ready for the functionality
//button: Add to Garden plan, onPlan=false
//button: Remove from Garden plan, onPlan=true
//input/button: Quantity to Plant, onPlan=true

export default Card;
