import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should render a title', () => {
    const mockTitle = 'Sakura'

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    expect(screen.getByText('Sakura')).toBeInTheDocument();
  })

  
})
