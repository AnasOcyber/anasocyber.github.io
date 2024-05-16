import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="#">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Made by Anas Obaid with 💛</h1>
      <div className="card">
        <p className="message">Play with the button</p>
        <p className="message">👇</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
