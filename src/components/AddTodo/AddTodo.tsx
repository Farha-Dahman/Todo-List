import * as React from "react";
import { TodoContext } from "../../Context/TodoContext";
import { TodoContextType, ITodo } from "../../@types/Todo";

const AddTodo: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;

  const [formData, setFormData] = React.useState<ITodo>({
    id: 0,
    title: "",
    description: "",
    status: false,
  });

  const handleForm = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo) => {
    e.preventDefault();
    saveTodo(formData);
    setFormData({
      id: 0,
      title: "",
      description: "",
      status: false,
    });
  };
  const isFormDataEmpty =
    formData.title.trim() === "" && formData.description.trim() === "";

  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div className="Add-container d-flex container justify-content-between mb-3 p-5 media-form">
        <div className="d-flex media-inputs">
          <div className="d-flex col-sm-6 col-md-6 col-lg-5 non-flex">
            <label htmlFor="name" className="me-2">
              Title
            </label>
            <input
              onChange={handleForm}
              type="text"
              id="title"
              value={formData.title}
              placeholder="Add your task"
            />
          </div>
          <div className="d-flex col-sm-6 col-md-6 col-lg-5 non-flex">
            <label htmlFor="description" className="me-2">
              Description
            </label>
            <textarea
              onChange={handleForm}
              value={formData.description}
              id="description"
              placeholder="Add description"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-2">
          <button
            className="btn add-button"
            type="submit"
            disabled={isFormDataEmpty}
          >
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddTodo;
