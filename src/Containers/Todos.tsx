import * as React from 'react';
import Todo from '../components/Todo/Todo';
import { useTodoOperations } from '../Hooks/useTodoOperations';

const Todos = () => {
  const { todos, updateTodo, deleteTodo } = useTodoOperations();

  return (
    <>
      {todos.length ? (
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))
      ) : (
        <p className='fw-bold text-light'>No Tasks to show. Please add your tasks.</p>
      )}
    </>
  );
};

export default Todos;
