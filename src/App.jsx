import { useState } from "react";
import "./App.css";
import Home from "./components/screens/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/screens/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./components/screens/SignUp";
import { CartProvider } from "./components/contextReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element = { <Home/> }/>
          <Route path="/login" element = { <Login />}/>
          <Route path="/createuser" element = { <SignUp />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
