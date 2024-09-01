import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders todo items', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/todo item/i);
  expect(todoElement).toBeInTheDocument();
});
