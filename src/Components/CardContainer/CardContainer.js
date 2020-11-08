import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ plantList }) => {
  let plantCards;
  if(plantList.length !== 0) {
    plantCards = plantList.map(plant => {
      return (
        <Card
          id={plant.id}
          key={plant.id}
          commonName={plant.common_name}
          scientificName={plant.scientific_name}
          image={plant.image_url}
        />
      )
    })
  }
  return (
    <section className='card-container'>
    {plantCards}
    </section>
  )
} 

export default CardContainer;
