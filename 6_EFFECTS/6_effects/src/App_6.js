import React, { useState, useEffect } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const handleClick = () => setCounter(prev => prev + 1);
  const handleChange = event => setKeyword(event.target.value);

  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  };
  useEffect(() => {
    iRunOnlyOnce();
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`i run when 'keyword' chages. keyword : ${keyword}`);
    }
  }, [keyword]);
  useEffect(() => {
    console.log(`i run when 'counter' chages. counter : ${counter}`);
  }, [counter]);
  useEffect(() => {
    console.log(
      `i run when 'counter' & 'keyword' chages. counter : ${counter} / keyword: ${keyword}`
    );
  }, [counter, keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={handleChange}
        type="text"
        placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
export default App;
