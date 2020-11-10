import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {

  const removePlant = (event) => {
    let id = props.id
    props.removeFromPlan(id)
  }

  return (
      <div id={props.id} className='plant-card'>
        <nav className='card-info'>
          <Link to={'/plant/' + props.id} className='card-link'>
            <img data-testid='plant-photo' className='plant-photo' src={props.image} alt= {props.commonName}/>
            <h2 className='common-name'>{props.commonName}</h2>
            <h2 className='scientific-name'>{props.scientificName}</h2>
          </Link>
        </nav>
        {props.onPlan && <button className='remove-button' type='button' onClick={removePlant}>Remove from Garden Plan</button>}
      </div>
  )
}


export default Card;

Card.propTypes = {
  id: PropTypes.number,
  commonName: PropTypes.string,
  image: PropTypes.string,
  scientificName: PropTypes.string,
  onPlan: PropTypes.bool
}
