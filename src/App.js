import { useEffect, useState } from "react";
import Progressbar from "./Components/progressbar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 1000);
  }, [value]);

  return (
    <div className="app">
      <h1>Progress Bar Compoenet goes Here</h1>
      <Progressbar value={value} />
      {value >= 100 ? "completed" : "loading....."}
    </div>
  );
}
