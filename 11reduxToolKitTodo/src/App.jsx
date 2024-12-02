
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {



  return (
    <>
      <h1
        className='text-3xl text-sky-500  py-2 m-2 bg-slate-700'
      >
        Todo List made with redux-toolkit
      </h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
