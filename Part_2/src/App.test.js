import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  render(<MemoryRouter><App /></MemoryRouter>)
});
