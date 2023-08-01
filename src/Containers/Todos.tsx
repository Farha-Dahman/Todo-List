import * as React from 'react';
import { TodoContextType, ITodo } from '../@types/Todo';
import { TodoContext } from '../Context/TodoContext';
import Todo from '../components/Todo/Todo';

const Todos = () => {
  const { todos, updateTodo, deleteTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
    {
        todos.length ?  todos.map((todo: ITodo) => (
            <Todo key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo} todo={todo} />
          )) : <p className='fw-bold'>No Tasks to show. Please add your tasks.</p>
    }
    </>
  );
};

export default Todos;