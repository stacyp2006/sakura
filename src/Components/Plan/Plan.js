import React from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import './Plan.css';

const Plan = ({ plan, removeFromPlan }) => {
  let plantCards;
  if(plan.length !== 0) {
    plantCards = plan.map((plant, index) => {
      return (
        <Card
          id={plant.id}
          key={index}
          commonName={plant.commonName}
          scientificName={plant.scientificName}
          image={plant.image}
          onPlan={true}
          removeFromPlan={removeFromPlan}
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

Plan.propTypes = {
  plan: PropTypes.array,
  removeFromPlan: PropTypes.func
}
