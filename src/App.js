import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Recommend from "./pages/Recommend";
import Modify from "./pages/Modify";
import { useEffect, useState } from "react";
import Stat from "./pages/Stat";
import Instruction from "./pages/Instruction";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <>
      <Header token={token} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/stat" element={<Stat />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/recommend" element={<Recommend />} />
        <Route exact path="/modify" element={<Modify />} />
        <Route exact path="/instruction" element={<Instruction />} />
      </Routes>
    </>
  );
}

export default App;
