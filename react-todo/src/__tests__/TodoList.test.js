import React from 'react';  // Import React
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';  // Adjust the import path if needed

test('renders todo items', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/todo item/i);
  expect(todoElement).toBeInTheDocument();
});
