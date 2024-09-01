// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList'; // Adjust path if necessary

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test('adds a new todo item', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add/i));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add/i));
  const todoItem = screen.getByText('New Todo');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveClass('completed'); // Adjust based on your implementation
});

test('deletes a todo item', () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/Add a new todo/i), { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText(/Add/i));
  fireEvent.click(screen.getByText(/Delete/i)); // Adjust if you have a specific delete button
  expect(screen.queryByText('New Todo')).toBeNull();
});
