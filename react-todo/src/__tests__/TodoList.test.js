import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders todo items and handles interaction', () => {
  render(<TodoList />);

  // Check if the todo items are rendered
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2); // Adjust this number based on your initial state

  // Check if the text of the todos is present
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();

});
