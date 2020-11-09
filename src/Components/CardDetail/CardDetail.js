import React, { Component } from 'react';
import { getSinglePlant } from '../../apiCalls.js';
import './CardDetail.css';

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantType: {},
      plantInfo: [],
      height: {}
    }
  }

  componentDidMount = () => {
    getSinglePlant(this.props.id)
    .then(data => this.setState({plantType: data.data.specifications, plantInfo: data.data.sources[0], height: data.data.specifications.average_height}))
    .catch(error => console.log('single plant fetch error'))
  }

  addPlant = (event) => {
    let newPlant = {
      id: this.props.id,
      key: this.props.id,
      commonName: this.props.common_name,
      scientificName: this.props.scientific_name,
      image: this.props.image_url
    }
    this.props.addToPlan(newPlant)
  }

  render() {
    return (
      <main className='plant-detail'>
        <section className='plant-info'>
          <h1 className='common-name'>{this.props.common_name}</h1>
          <h2 className='scientific-name'>{this.props.scientific_name}</h2>
          {this.state.plantType.growth_habit !== null && <h2>Plant Type: {this.state.plantType.growth_habit}</h2>}
          {this.state.height.cm  !== null &&
          <h2>Height: {this.state.height.cm}cm</h2>}
          <a
          className='plant-link'
          href={this.state.plantInfo.url}
          target='_blank'>
          Learn More
          </a>
          {!this.props.onPlan && <button className='add-button' type='button' onClick={this.addPlant}>Add to Garden Plan</button>}
          {this.props.onPlan && <button className='remove-button' type='button'>Remove from Garden Plan</button>}
        </section>
        <img className='photo' src={this.props.image_url} alt= {this.props.common_name}/>
      </main>
    )
  }
}

//Conditionally render both buttons
export default CardDetail;
