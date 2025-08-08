import { useState } from "react";

function TodoFilter() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTask("");
  }

  function toggleCompleted(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>📋 Задачи с фильтром</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите задачу"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>

      <label style={{ display: "block", marginTop: "20px" }}>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        Показать выполненные задачи
      </label>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos
          .filter((todo) => (showCompleted ? true : !todo.completed))
          .map((todo) => (
            <li key={todo.id} style={{ marginBottom: "10px" }}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  marginRight: "10px",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => toggleCompleted(todo.id)}>
                {todo.completed ? "↩️ Отменить" : "✅ Выполнено"}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoFilter;
