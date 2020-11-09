import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = ({ plantList, removeFromPlan }) => {
  let plantCards;
  if(plantList.length !== 0) {
    plantCards = plantList.map((plant, index) => {
      return (
        <Card
          id={plant.id}
          key={index}
          commonName={plant.common_name}
          scientificName={plant.scientific_name}
          image={plant.image_url}
        />
      )
    })
  }
  return (
    <div role='region' className='card-container'>
    {plantCards}
    </div>
  )
}

export default CardContainer;

CardContainer.propTypes = {
  plantList: PropTypes.array,
  removeFromPlan: PropTypes.func
}
