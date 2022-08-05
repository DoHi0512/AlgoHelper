import React, { useState, useEffect } from "react";
import axios from "axios";
import "../static/Recommend.css";
export default function Recommend() {
  const problem = JSON.parse(localStorage.problem);
  const [solved, setSolved] = useState([]);
  async function solvedList() {
    const form = { username: "donghuni642" };
    const response = axios.post("http://127.0.0.1:8000/ahapp/solved/", form);
    setSolved((await response).data);
  }
  useEffect(() => {
    solvedList();
  }, []);
  console.log(solved);
  const problemTable = problem["problem"].map((data, idx) => (
    <div>
      <img src={problem["imgs"][idx]} />
      <a href={problem["url"][idx]}>{data}</a>
    </div>
  ));
  return (
    <>
      <div className="con">{problemTable}</div>
    </>
  );
}
