import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from 'App';
import { MemoryRouter } from 'react-router';

afterEach(() => {
  cleanup();
});

test('01 - GIVEN a user accessing the application WHEN the rendering process completes successfully THEN the user will be able to see the main title', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );

  const titleElement = screen.getByText(/Podcaster/i);

  expect(titleElement).toBeInTheDocument();
});
