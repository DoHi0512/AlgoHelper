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
  const [problem, setProblem] = useState([]);
  const [urls, setUrls] = useState([]);
  const [imgs, setImgs] = useState([]);
  async function pullProblem() {
    const form = {
      url: "https://solved.ac/search?query=*b5..r1&sort=random&direction=asc&page=1",
    };
    const response = axios.post("http://127.0.0.1:8000/ahapp/problem/", form);
    setProblem((await response).data["problem"]);
    setUrls((await response).data["urls"]);
    setImgs((await response).data["imgurl"]);
    console.log("가져오기 성공");
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
        <Route
          exact
          path="/recommend"
          element={<Recommend problems={problem} urls={urls} imgs={imgs} />}
        />
      </Routes>
    </>
  );
}

export default App;
