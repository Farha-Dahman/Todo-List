import * as React from 'react';
import '../../Style/css/Style.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ITodo } from '../../@types/Todo';

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {

  const checkTodo: string = todo.status ? `text-decoration-line-through` : '';

  return (
    <div className="Card container p-0 mb-1">
      <div className="Card--text d-flex align-items-center justify-content-between px-4 text-start">
      <div className='task py-3'>
          <h2 className={`${checkTodo}`}>{todo.title}</h2>
          <p className={`${checkTodo}`}>{todo.description}</p>
        </div>
        <div>
          <button onClick={() => updateTodo(todo.id)} title="Complete"  className={`btn btn btn-light my-5 me-2 btn-lg ${todo.status ? 'hide-button' : 'Card--button'}`}>
              Complete
          </button>
          <button onClick={() => deleteTodo(todo.id)} title="Add Todo" className={`btn btn btn-light my-5 btn-lg Card--button`}>
              <FontAwesomeIcon icon={faTrashCan} />
          </button>
      </div>
      </div>
    </div>
  );
};

export default Todo;