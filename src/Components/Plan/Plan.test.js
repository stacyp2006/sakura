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

  it('should not display a card that has not been added to the plan', () => {
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

    expect(screen.queryByText('Saguaro Cactus')).not.toBeInTheDocument()
  })

  it('should display a message if there are no plants in the plan', () => {
    const fakePlantList = []
    const fakeRemove = jest.fn()

    render (
      <BrowserRouter>
      <Plan plan={fakePlantList}
      removeFromPlan={fakeRemove}
      />
      </BrowserRouter>
    )

    expect(screen.getByText('Return to the Home page and add some plants to plan your garden.')).toBeInTheDocument()
  })

  it('should invoke the removeFromPlan method on button click', () => {
    const fakePlantList = [
      {
        id: 1234,
        image: 'mock URL1',
        commonName: 'Japanese cheesewood',
        scientficName: 'Pittosporum tobira'
      },
      {
        id: 4567,
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

    //what should render with 2 plants added to plan
    expect(fakePlantList).toHaveLength(2);
    expect(screen.getByText('Japanese cheesewood')).toBeInTheDocument();
    expect(screen.getByText('Japanese raspberry')).toBeInTheDocument();

    //buttons render and the first card's button is clicked
    const removes = screen.getAllByText('Remove from Garden Plan')
    expect(removes).toHaveLength(2)
    userEvent.click(removes[0])
    expect(fakeRemove).toHaveBeenCalledWith(1234)
    expect(fakeRemove).toHaveBeenCalledTimes(1)
  })
})
