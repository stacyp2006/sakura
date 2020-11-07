import React, { Component } from 'react';
// import CardContainer from '../CardContainer/CardContainer';
import { getPlants } from '../../apiCalls.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: []
    }
  }

  componentDidMount() {
    getPlants()
    .then(data => this.setState({plants: data.data}))
    .catch(error => console.log('fetch error'))
  }

  render() {
    return (
      <main>
        <h1>Sakura</h1>
      </main>
    )
  }
}

export default App;
