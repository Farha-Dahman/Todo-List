import * as React from 'react';
import { TodoContext } from '../../Context/TodoContext';
import { TodoContextType, ITodo } from '../../@types/Todo';

const AddTodo: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext) as TodoContextType;

  const [formData, setFormData] = React.useState<ITodo>({
    id: 0,
    title: "",
    description: "",
    status: false,
  });

  const handleForm = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
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
  const isFormDataEmpty = formData.title.trim() === "" && formData.description.trim() === "";
  
  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div className='Add-container d-flex container align-items-center justify-content-between mb-3 p-5'>
        <div className='d-flex'>
        <div className='m-2'>
          <label htmlFor="name" className='me-2'>Task Title</label>
          <input onChange={handleForm} type="text" id="title" value={formData.title} placeholder='Add your task'/>
        </div>
        <div className='m-2 d-flex'>
          <label htmlFor="description" className='me-2 align-items-start'>Task Description</label>
          <textarea onChange={handleForm} value={formData.description} id="description" placeholder='Add description'/>
        </div>
        </div>
      <button className='btn add-button' disabled={isFormDataEmpty}>Add Todo</button>
      </div>
    </form>
  );
};
export default AddTodo;