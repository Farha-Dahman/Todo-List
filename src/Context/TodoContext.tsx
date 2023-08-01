import * as React from "react";
import { TodoContextType, ITodo } from "../@types/Todo";

export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(), 
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    todos.filter((todo: ITodo) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo , deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
