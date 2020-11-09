import React from 'react';
import Card from '../Card/Card';
import './Plan.css';

const Plan = ({ plan }) => {
  let plantCards;
  if(plan.length !== 0) {
    plantCards = plan.map(plant => {
      return (
        <Card
          id={plant.id}
          key={plant.id}
          commonName={plant.commonName}
          scientificName={plant.scientificName}
          image={plant.image}
          onPlan={true}
        />
      )
    })
  } else {
    return (<p className='add-message'>Return to the Home page and add some plants to plan your garden.</p>)
  }
  return (
    <section className='card-container'>
    {plantCards}
    </section>
  )
}

export default Plan;
