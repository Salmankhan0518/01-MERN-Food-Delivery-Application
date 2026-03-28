import { useState } from "react";
import "./App.css";
import Home from "./components/screens/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/screens/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = { <Home/> }/>
          <Route path="/login" element = { <Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
