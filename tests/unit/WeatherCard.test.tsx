import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeatherCard from '../../src/components/WeatherCard/WeatherCard';

describe('WeatherCard', () => {
  it('renders a WeatherCard correctly', () => {
    const props = {
      index: 1,
      day: '2024-01-01',
      maxTemp: '20',
      minTemp: '10'
    };

    render(<WeatherCard {...props} />);

    expect(screen.getByText(/2024-01-01/i)).toBeInTheDocument();
  });
});
