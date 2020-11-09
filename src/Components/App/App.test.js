import React from 'react';
import App from './App';
import Plan from '../Plan/Plan';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { getPlants } from '../../apiCalls.js'
jest.mock('../../apiCalls.js');


describe('App', () => {
  it('should render a title', () => {
    getPlants.mockResolvedValueOnce([])
    const mockTitle = 'Sakura'

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    expect(screen.getByText('Sakura')).toBeInTheDocument();
  })

  it('should render links for Home and Plan pages', () => {
    getPlants.mockResolvedValueOnce([])
    const mockHomeLink = 'Home'
    const mockPlanLink = 'My Garden Plan'

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('My Garden Plan')).toBeInTheDocument()
  })

  it('should render the plan page when the plan link is clicked', () => {
    getPlants.mockResolvedValueOnce([]);
    const mockPlan = []
    render(
      <BrowserRouter><App /><Plan plan={mockPlan}/></BrowserRouter>
    );

    userEvent.click(screen.getByText('My Garden Plan'));
    expect(screen.getAllByText('Return to the Home page and add some plants to plan your garden.'));
  });

  

  //test fetch for plant list
})
