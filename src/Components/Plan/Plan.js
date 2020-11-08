import React from 'react';
import './Plan.css';

const Plan = ({ plan }) => {
  let plantCards;
  if(plan.length !== 0) {
    plantCards = plan.map(plant => {
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

export default Plan;
