import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import CardDetail from '../CardDetail/CardDetail';
import Plan from '../Plan/Plan';
import { Route, Link } from 'react-router-dom';
import { getPlants } from '../../apiCalls.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      plants: [],
      plan: []
    }
  }

  addToPlan = (newPlant) => {
    this.setState({plan: [...this.state.plan, newPlant]})
  }

  removeFromPlan = () =>{

  }

  componentDidMount = () => {
    getPlants()
    .then(data => this.setState({plants: data.data}))
    .catch(error => console.log('fetch error'))
  }

  render() {
    return (
      <main>
        <nav className='links'>
          <h1 className='title'>Sakura</h1>
          <Link to='/' className='homelink'>Home</Link> {' '} <Link to='/plan' className='planlink'>My Garden Plan</Link>
        </nav>
        <Route exact path='/' render={() => <CardContainer plantList={this.state.plants} addToPlan={this.addToPlan}/>} />
        <Route path='/plant/:id'
          render={({ match }) =>{
            const { id } = match.params;
            const plantToRender = this.state.plants.find(plant => plant.id === parseInt(id));
            return <CardDetail {...plantToRender}/>
          }}
        />
        <Route path='/plan' render={() => <Plan plan={this.state.plan}/>}/>
      </main>
    )
  }
}

export default App;
