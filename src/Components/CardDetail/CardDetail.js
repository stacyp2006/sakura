import React, { Component } from 'react';
import { getSinglePlant } from '../../apiCalls.js';
import './CardDetail.css';

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantType: {}
    }
  }

  componentDidMount = () => {
    getSinglePlant(this.props.id)
    .then(data => this.setState({plantType: data.data.specifications}))
    .catch(error => console.log('single plant fetch error'))
  }

  render() {
    return (
      <main>
        <h1>{this.props.common_name}</h1>
        <h2>{this.props.scientific_name}</h2>
        <h2>Native to Japan: </h2>
        {this.state.plantType.growth_habit !== null && <h2>Plant Type: {this.state.plantType.growth_habit}</h2>}
        <h2>Learn More: </h2>
        <button className='add-button' type='button'>Add to Garden Plan</button>
        <img className='photo' src={this.props.image_url} alt= {this.props.common_name}/>
      </main>
    )
  }
}
export default CardDetail;
