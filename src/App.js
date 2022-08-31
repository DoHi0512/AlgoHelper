import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Recommend from "./pages/Recommend";
import { useEffect, useState } from "react";
import axios from "axios";
import Stat from "./pages/stat";

function App() {
  const [token, setToken] = useState(null);
  const [boj, setBoj] = useState();

  async function pullId() {
    const form = { name: localStorage.getItem("username") };
    const response = axios.post("http://127.0.0.1:8000/ahapp/getboj/", form);
    setBoj((await response).data);
  }
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    pullId();
  }, []);

  return (
    <>
      <Header token={token} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/recommend" element={<Recommend boj={boj} />} />
        <Route exact path="/stat" element={<Stat />} />
      </Routes>
    </>
  );
}

export default App;
