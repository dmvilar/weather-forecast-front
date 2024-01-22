import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../../src/components/SearchBar/SearchBar';

describe('SearchBar', () => {
  test('renders input element correctly', () => {
    render(<SearchBar onSearch={jest.fn()} isLoading={false} />);
    expect(screen.getByPlaceholderText(/enter address/i)).toBeInTheDocument();
  });

  test('allows users to change an address', () => {
    render(<SearchBar onSearch={jest.fn()} isLoading={false} />);
    const input: any = screen.getByPlaceholderText(/enter address/i);
    fireEvent.change(input, { target: { value: '123 Main Street' } });
    expect(input.value).toBe('123 Main Street');
  });
});
