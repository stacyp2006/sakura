import React from 'react';
import Card from '../Card/Card';
import './CardContainer.css';

const CardContainer = ({ plantList, addToPlan, removeFromPlan }) => {
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
          addToPlan={addToPlan}
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
