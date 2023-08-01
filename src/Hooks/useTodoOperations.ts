import { useContext } from 'react';
import { TodoContextType, ITodo } from '../@types/Todo';
import { TodoContext } from '../Context/TodoContext';

export const useTodoOperations = (): TodoContextType => {
  const todoContext = useContext(TodoContext) as TodoContextType;

  const { todos, saveTodo, updateTodo, deleteTodo } = todoContext;

  return {
    todos,
    saveTodo,
    updateTodo,
    deleteTodo,
  };
};
