import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    // State to manage the edit functionality
    const [editingTodo, setEditingTodo] = useState(null);
    const [newText, setNewText] = useState("");
    const [isRead, setIsRead] = useState(false)

    // Function to handle editing the todo
    const handleEdit = (todo) => {
        setEditingTodo(todo);
        console.log(newText)
        setNewText(todo.text);
        setIsRead(!isRead)

    };

    // Function to handle update action
    const handleUpdate = () => {
        if (newText.trim() !== "") {
            console.log(isRead)
            dispatch(updateTodo({ id: editingTodo.id, text: newText }));
            setEditingTodo(null); // Close the edit mode
            setNewText(""); // Reset the new text
            setIsRead(!isRead)
        }
    };

    return (
        <>
            <div className="text-3xl text-sky-500 py-2 m-2 bg-slate-700">
                Your Todos
            </div>
            <ul className="list-none">
                {todos.map((todo) => {
                    return (
                        <li
                            className="mt-4 flex gap-10 items-center justify-around bg-zinc-800 px-4 py-2 rounded"
                            key={todo.id}
                        >
                            {/* Display input if editing */}
                            {editingTodo && editingTodo.id === todo.id ? (
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="text"
                                        value={newText}
                                        onChange={(e) => setNewText(e.target.value)}
                                        className="px-2 py-1 rounded text-white bg-zinc-700 outline-none "
                                    />
                                    <button
                                        onClick={handleUpdate}
                                        className="text-white bg-blue-500 px-11 py-2 rounded "
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => {
                                            setEditingTodo(null);
                                            setNewText("");
                                            setIsRead(!isRead)
                                        }}
                                        className="text-white bg-gray-500 px-4 py-2 rounded "
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <input
                                    type="text"
                                    value={todo.text}
                                    onChange={(e) => setNewText(e.target.value)}
                                    className="px-2 py-1 rounded text-white bg-zinc-800 hover:cursor-default outline-none"
                                    readOnly={isRead}

                                />
                            )}

                            {/* Edit button */}
                            <button
                                className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                onClick={() => handleEdit(todo)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.121 2.879a2.121 2.121 0 113.001 3.001l-9.941 9.942a1 1 0 00-.288.63l-1.151 4.603a1 1 0 001.199 1.199l4.603-1.151a1 1 0 00.63-.288l9.941-9.941a2.121 2.121 0 010 3.001l-6.314 6.314a1 1 0 00-.211.434l-1.33 5.31a1 1 0 001.243 1.243l5.31-1.33a1 1 0 00.434-.211l6.314-6.314a4.243 4.243 0 000-6.001l-3.122-3.122a4.243 4.243 0 00-6.001 0L14.121 2.88z"
                                    />
                                </svg>
                            </button>

                            {/* Delete button */}
                            <button
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                onClick={() => dispatch(removeTodo(todo.id))}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Todo;
