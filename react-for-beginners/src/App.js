import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once.");
  }, []);
  useEffect(() => {
    if (keyword.trim() !== "" && keyword.length > 5) {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter' & 'keyword' change.");
  }, [counter, keyword]);
  return (
    <div>
      <input type="text" onChange={(e) => setKeyword(e.target.value)} />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
