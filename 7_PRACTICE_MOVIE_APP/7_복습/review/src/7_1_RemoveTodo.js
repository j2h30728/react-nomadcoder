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
    settoDos(currentArray => [todo, ...currentArray]);
  };

  //1.이벤트 일어난 곳의 부모태그(=== li태그_todo)를 삭제하는 경우
  const handleDelete1 = event => {
    const li = event.target.parentElement;
    li.remove();
  };

  //2. todoList에서 filter함수로 삭제하는경우
  const handleDelete = idx => {
    settoDos(toDos.filter(todo => todo !== toDos[idx]));
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
      <hr />
      <ul>
        {toDos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button onClick={() => handleDelete(idx)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
