import React from 'react';
import Plan from './Plan';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Plan', () => {
  it('should render a garden plan container', () => {
    const fakePlantList = [
      {
        image: 'mock URL1',
        commonName: 'Japanese cheesewood',
        scientficName: 'Pittosporum tobira'
      },
      {
        image: 'mock URL2',
        commonName: 'Japanese raspberry',
        scientficName: 'Rubus parvifolius'
      }
    ]
    const fakeRemove = jest.fn()

    render (
      <BrowserRouter>
      <Plan plan={fakePlantList}
      removeFromPlan={fakeRemove}
      />
      </BrowserRouter>
    )

    expect(screen.getByRole('region')).toBeInTheDocument();
  })

  it('should display a message if there are no plants in the plan', () => {
    const fakePlantList = []
    const fakeRemove = jest.fn()
    // const fakeMessage = 'Return to the home page and add some plants to plan your garden.'

    render (
      <BrowserRouter>
      <Plan plan={fakePlantList}
      removeFromPlan={fakeRemove}
      />
      </BrowserRouter>
    )

    expect(screen.getByText('Return to the Home page and add some plants to plan your garden.')).toBeInTheDocument()
  })
})

//test render
//test message
//test button functionality-removeFromPlan
