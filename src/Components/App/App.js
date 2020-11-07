import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import { Route, Link, withRouter } from 'react-router-dom';
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
        <h1 className='title'>Sakura</h1>
        <Route exact path="/" render={() => <CardContainer plantList={this.state.plants}/>} />
        <Route path='/plant/:id'
          render={({ match }) =>{
            const { id } = match.params;
            const plantToRender = this.state.plants.find(plant => plant.id === parseInt(id));
            return <CardDetail />
          }}
        />
      </main>
    )
  }
}

export default App;
