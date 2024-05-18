import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full mx-auto bg-blue-300 h-20 ">
        <h1 className="text-3xl font-bold font-inter block p-5">
          Hello World!
        </h1>
      </div>
    </>
  );
}

export default App;
