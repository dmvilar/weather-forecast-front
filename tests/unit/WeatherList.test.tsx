import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeatherList from '../../src/components/WeatherList/WeatherList';
import { WeatherForecast } from '../../src/types';

describe('WeatherList', () => {
  it('renders a list of WeatherCard components for each forecast', () => {
    const forecasts: WeatherForecast[] = [
      { date: '2024-01-01', maxTemperature: '20', minTemperature: '10' },
      { date: '2024-01-02', maxTemperature: '22', minTemperature: '12' }
    ];

    render(<WeatherList forecasts={forecasts} />);

    expect(screen.getByText(/2024-01-01/i)).toBeInTheDocument();
  });
});
