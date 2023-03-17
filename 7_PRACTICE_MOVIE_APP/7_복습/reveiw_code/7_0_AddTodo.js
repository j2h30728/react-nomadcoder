import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [toDos, settoDos] = useState([]);
  const handleChange = event => {
    setTodo(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    settoDos(currentArray => [...currentArray, todo]);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          type="text"
          placeholder="Write your todos.."
        />
        <button>Add To Do</button>
      </form>
      {toDos.map((todo, idx) => (
        <div key={idx}>{todo}</div>
      ))}
    </div>
  );
}

export default App;
