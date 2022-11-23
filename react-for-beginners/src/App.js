import { useState, useEffect } from "react";

function Hello() {
  function createed() {
    console.log("create :)");
    return destroyed;
  }
  function destroyed() {
    console.log("destroyed :(");
  }
  useEffect(createed, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
