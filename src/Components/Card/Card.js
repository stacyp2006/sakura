import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {

  const addPlant = (event) => {
    let newPlant = {...props}
    props.addToPlan(newPlant)
  }

  const removePlant = (event) => {
    let id = props.id
    props.removeFromPlan(id)
  }

  return (
      <div id={props.id} className='plant-card'>
        <nav className='card-info'>
          <Link to={'/plant/' + props.id}>
            <img className='plant-photo' src={props.image} alt= {props.commonName}/>
            <h2>{props.commonName}</h2>
            <h2 className='scientific-name'>{props.scientificName}</h2>
          </Link>
        </nav>
        {!props.onPlan && <button className='add-button' type='button' onClick={addPlant}>Add to Garden Plan</button>}
        {props.onPlan && <button className='remove-button' type='button' onClick={removePlant}>Remove from Garden Plan</button>}
      </div>
  )
}


export default Card;
