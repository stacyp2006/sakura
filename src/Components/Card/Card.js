import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onPlan: false,
      quantity: ''
    }
  }

  render() {
    return (
      <div id={this.props.id} className='plant-card'>
        <nav className='card-info'>
          <Link to={'/plant/' + this.props.id}>
            <img className='plant-photo' src={this.props.image} alt= {this.props.commonName}/>
            <h2>{this.props.commonName}</h2>
            <h2 className='scientific-name'>{this.props.scientificName}</h2>
          </Link>
        </nav>
        {!this.state.onPlan && <button className='add-button' type='button'>Add to Garden Plan</button>}
        {this.state.onPlan && <button className='remove-button' type='button'>Remove from Garden Plan</button>}
      </div>
    )
  }
}

//Add buttons when ready for the functionality
//button: Add to Garden plan, onPlan=false
//button: Remove from Garden plan, onPlan=true
//input/button: Quantity to Plant, onPlan=true

export default Card;
