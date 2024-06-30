import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { useEffect } from "react";
import {  getAll } from "./fetch";

function App() {
  const fetchData = async () => {
    const response = await getAll();
    console.log(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      HOLA
    </div>
  );
}

export default App;
