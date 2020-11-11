import React from 'react';
import CardContainer from './CardContainer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('CardContainer', () => {
  it('should render a plant card container', () => {
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

    render (
      <MemoryRouter>
        <CardContainer plantList={fakePlantList}
        />
      </MemoryRouter>
    )

    expect(screen.getByRole('region')).toBeInTheDocument();
  })
})
