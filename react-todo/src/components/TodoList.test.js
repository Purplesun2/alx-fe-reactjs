// src/components/TodoList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

test('renders todo items', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/todo item/i);
  expect(todoElement).toBeInTheDocument();
});
