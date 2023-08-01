import * as React from 'react'
import TodoProvider from './Context/TodoContext'
import Todos from './Containers/Todos'
import AddTodo from './components/AddTodo/AddTodo'

export default function App() {
  return (
    <TodoProvider>
      <main className='text-center m-3'>
        <h1 className='Title'>My Todos</h1>
        <AddTodo />
        <Todos />
      </main>
    </TodoProvider>
  )
}