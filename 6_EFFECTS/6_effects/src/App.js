import { useState, useEffect } from "react";

export default function App() {
  function Hello() {
    useEffect(() => {
      console.log("Hello 컴포넌트가 mounted");
      return () => console.log("Hello 컴포넌트가 unmounted");
    }, []);
    return <h3>Hello</h3>;
  }
  const [showing, setShowing] = useState(false);
  const handleShowing = () => setShowing(!showing);
  return (
    <div>
      {showing && <Hello />}
      <button onClick={handleShowing}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
