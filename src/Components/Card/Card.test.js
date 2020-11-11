import React from 'react';
import Card from './Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Card', () => {
  it('should render a plant card', () => {
    const mockCard = {
      image: 'mock URL',
      commonName: 'Japanese cheesewood',
      scientficName: 'Pittosporum tobira'
    }

    render(
      <MemoryRouter>
        <Card
          id={12345}
          key={1}
          commonName={mockCard.commonName}
          scientificName={mockCard.scientficName}
          image={mockCard.image}
        />
      </MemoryRouter>
    )

    expect(screen.getByText('Japanese cheesewood')).toBeInTheDocument()
    expect(screen.getByText('Pittosporum tobira')).toBeInTheDocument()
  })

})
