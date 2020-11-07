import React, { Component } from 'react';
import { getSinglePlant } from '../../apiCalls.js';
import './CardDetail.css';

class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plant: {}
    }
  }

  componentDidMount() {
    getSinglePlant(this.props.id)
    .then(data => this.setState({plant: data.data}))
    .catch(error => console.log('single plant fetch error'))
  }

  render() {
    return (
      <main>
        <h1>Hello</h1>
      </main>
    )
  }
}
export default CardDetail;
