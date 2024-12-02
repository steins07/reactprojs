import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHadler = (e) => {
        e.preventDefault()
        dispatch(
            addTodo(input)
        )
        setInput('')
    }

    return (
        <form className="space-x-3"
            onSubmit={addTodoHadler}>
            <input
                type="text"
                placeholder="Enter a Todo..."
                className='bg-gray-800 rounded botder border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="rounded text-lg px-6 py-2 bg-indigo-500 text-white border-0 focus:outline-none hover:bg-indigo-600 ">
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
