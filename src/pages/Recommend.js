import React, { useState, useEffect } from "react";
import axios from "axios";
import "../static/Recommend.css";
export default function Recommend() {
  const [problem, setProblem] = useState([]);
  const [link, setLink] = useState([]);
  async function pullPro() {
    const response = axios.get("http://127.0.0.1:8000/ahapp/problem/");
    alert(response);
  }
  return (
    <>
      <div className="con">
        <button onClick={() => pullPro}>HI</button>
      </div>
    </>
  );
}
