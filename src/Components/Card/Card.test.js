import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


//two things to test: render a book card, when card is clicked routes to detail view

describe('Card', () => {
  it('should render a plant card', () => {
    const mockCard = {
      image: 'mock URL',
      commonName: 'Japanese cheesewood',
      scientficName: 'Pittosporum tobira'
    }

    render(
      <BrowserRouter>
      <Card
        id={12345}
        key={1}
        commonName={mockCard.commonName}
        scientificName={mockCard.scientficName}
        image={mockCard.image}
      />
      </BrowserRouter>
    )

    expect(screen.getByText('Japanese cheesewood')).toBeInTheDocument()
    expect(screen.getByText('Pittosporum tobira')).toBeInTheDocument()
  })
})
