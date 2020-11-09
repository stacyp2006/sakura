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

  it('should render links for Home and Plan pages', () => {
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
})
