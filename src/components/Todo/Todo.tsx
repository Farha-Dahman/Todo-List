import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ITodo } from "../../@types/Todo";

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const Todo: React.FC<Props> = ({ todo, updateTodo, deleteTodo }) => {
  const checkTodo: string = todo.status ? `text-decoration-line-through` : "";

  return (
    <div className="Card container p-0 mb-1">
      <div className="card-text d-flex align-items-center justify-content-between px-4 text-start">
        <div className="col-sm-7 col-md-8 col-lg-9 media-xsm">
          <div className="task py-3 d-flex">
            <h2 className={`${checkTodo}`}>{todo.title}</h2>
            <p className={`${checkTodo}`}>{todo.description}</p>
          </div>
        </div>
        <div className="col-sm-5 col-md-4 col-lg-3">
          <button
            onClick={() => updateTodo(todo.id)}
            title="Complete"
            className={`btn btn-light my-5 me-2 btn-lg ${
              todo.status ? "hide-button" : "card-button"
            }`}
          >
            Complete
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            title="Add Todo"
            className={`btn btn-light my-5 btn-lg card-button`}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
