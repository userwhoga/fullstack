import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders home page heading', () => {
    render(<App />);

    expect(screen.getByText(/Choose a Chapter/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Full-Stack Chapter 11-14/i })).toBeInTheDocument();
  });
});




