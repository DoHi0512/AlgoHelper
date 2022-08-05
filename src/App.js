import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Recommend from "./pages/Recommend";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [token, setToken] = useState(null);
  async function pullProblem() {
    const form = {
      url: "https://solved.ac/search?query=*b5..s1+%21%40donghuni642&sort=random&direction=desc&page=1",
    };
    const response = axios.post("http://127.0.0.1:8000/ahapp/problem/", form);
    console.log((await response).data["problem"]);
    const problem = (await response).data["problem"];
    localStorage.problem = JSON.stringify(problem);
  }
  useEffect(() => {
    pullProblem();
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <>
      <Header token={token} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/recommend" element={<Recommend />} />
      </Routes>
    </>
  );
}

export default App;
