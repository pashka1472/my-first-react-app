import { useState } from "react";

function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        if (task.trim() === "") return; // Prevent adding empty tasks
        const newTask = {
            id: Date.now(),
            text: task 
        };
    
        setTodos([...todos, newTask]);
        setTask(""); // Clear input field after adding
    }

    function handleDelete(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div style ={{ margin: "20px"}}>
            <h2> TO DO list</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    placeholder="Enter a new task"
                    onChange={(event) =>setTask(event.target.value)}
                    style={{ padding: '10px', marginRight: '10px' }}
                />
                <button type="submit">Add Task</button>
            </form>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li key="{todo.id}">{todo.text} {todo.id}
                    <button onClick={() => handleDelete(todo.id)} style= {{marginLeft : "10px"}}> Delete</button>                  
                    </li>
                ))}
            </ul>
        </div>
    )


}
export default TodoApp;