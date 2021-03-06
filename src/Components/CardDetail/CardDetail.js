import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getSinglePlant } from '../../apiCalls.js';
import './CardDetail.css';

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantType: {},
      plantInfo: [],
      height: {},
      onPlan: false
    }
  }

  componentDidMount = async () => {
    await getSinglePlant(this.props.id)
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
    this.setState({onPlan: true})
    this.props.addToPlan(newPlant)
  }

  removePlant = (event) => {
    this.setState({onPlan: false})
    let id = this.props.id
    this.props.removeFromPlan(id)
  }

  render() {
    return (
      <main className='plant-detail'>
        <section className='plant-info'>
          <h1 className='common-name-detail'>{this.props.common_name}</h1>
          <h2 className='scientific-name-detail'>{this.props.scientific_name}</h2>
          <h2 className='plant-type'>Plant Type: {this.state.plantType.growth_habit}</h2>
          {this.state.height.cm  !== null &&
          <h2>Height: {this.state.height.cm}cm</h2>}
          <a
          className='plant-link'
          href={this.state.plantInfo.url}
          target='_blank'
          rel="noreferrer">
          Learn More
          </a>
          <br></br>
          {!this.state.onPlan && <button className='add-button' type='button' onClick={this.addPlant}>Add to Garden Plan</button>}
          {this.state.onPlan && <button className='remove-button' type='button' onClick={this.removePlant}>Remove from Garden Plan</button>}
        </section>
        <img className='photo' src={this.props.image_url} alt= {this.props.common_name}/>
      </main>
    )
  }
}

export default CardDetail;

CardDetail.propTypes = {
  id: PropTypes.number,
  common_name: PropTypes.string,
  image_url: PropTypes.string,
  scientific_name: PropTypes.string,
  addToPlan: PropTypes.func,
  removeFromPlan: PropTypes.func
}
