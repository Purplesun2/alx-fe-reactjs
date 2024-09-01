// src/components/TodoList.jsx
import React from 'react';

const TodoList = () => {
  const todos = ['Buy groceries', 'Read a book', 'Exercise'];

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
