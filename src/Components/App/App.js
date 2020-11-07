import React, { Component } from 'react';
// import CardContainer from '../CardContainer/CardContainer';
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
    .then(data => this.setState({plants: data}))
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
