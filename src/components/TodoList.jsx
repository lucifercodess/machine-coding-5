import { useState } from "react";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit() {
    if (!input.trim()) return;

    setTodos((prev) => [...prev, { text: input, completed: false }]);
    setInput("");
  }

  function handleDelete(index) {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  }

  function handleToggle(index) {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter your todo here"
      />
      <button onClick={handleSubmit}>submit</button>

      <div className="todo-container">
        {todos.map((todo, index) => (
          <div key={index} className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <span className="cross" onClick={() => handleDelete(index)}>
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
