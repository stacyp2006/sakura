import React from 'react';
import App from './App';
import Plan from '../Plan/Plan';
import CardContainer from '../CardContainer/CardContainer';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getPlants } from '../../apiCalls.js'
jest.mock('../../apiCalls.js');


describe('App', () => {
  it('should render a title', () => {
    getPlants.mockResolvedValueOnce([])
    const mockTitle = 'Sakura'

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Sakura')).toBeInTheDocument();
  })

  it('should render links for Home and Plan pages', () => {
    getPlants.mockResolvedValueOnce([])
    const mockHomeLink = 'Home'
    const mockPlanLink = 'My Garden Plan'

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('My Garden Plan')).toBeInTheDocument()
  })

  it('should render the plan page when the plan link is clicked', () => {
    getPlants.mockResolvedValueOnce([]);
    const mockPlan = []

    render(
      <MemoryRouter><App /><Plan plan={mockPlan}/></MemoryRouter>
    );

    userEvent.click(screen.getByText('My Garden Plan'));
    expect(screen.getAllByText('Return to the Home page and add some plants to plan your garden.'));
  });

  it('should return to the home view when the home link is clicked', () => {
    getPlants.mockResolvedValueOnce([]);

    render(
      <MemoryRouter><App /></MemoryRouter>
    );

    userEvent.click(screen.getByText('Home'));
    expect(screen.getByText('Choose a plant to start planning your garden!'))
  })

  it('should render plant cards', async () => {
    getPlants.mockResolvedValue({
      data: [
        {
          common_name: 'Japanese rose',
          scientific_name: 'sciency science',
          image_url: 'mockURL'
        },
        {
          common_name: 'Japanese plum',
          scientific_name: 'sciency',
          image_url: 'mockURL2'
        }
      ]
    });

    const mockList = [];

    render(
      <MemoryRouter>
        <App />
          <CardContainer plantList={mockList} />
      </MemoryRouter>
    );

    expect(await waitFor( () => screen.getByText('Japanese rose'))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText('sciency science'))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText('Japanese plum'))).toBeInTheDocument();
    expect(await waitFor( () => screen.getByText('sciency'))).toBeInTheDocument();
    const images = await waitFor(() => screen.getAllByTestId('plant-photo'))
    expect(images).toHaveLength(2)
  })
})
