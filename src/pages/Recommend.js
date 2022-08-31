import React, { useState, useEffect } from "react";
import axios from "axios";
import "../static/Recommend.css";
export default function Recommend(props) {
  async function pullProblem() {
    const form = {
      url: `https://solved.ac/search?query=*b5..r1+%21%40${props.boj}&sort=random&direction=desc&page=1`,
    };
    const response = axios.post("http://127.0.0.1:8000/ahapp/problem/", form);
    setPloblem((await response).data);
  }
  const [problem, setPloblem] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  useEffect(() => {
    let timer = setInterval(() => {
      pullProblem();
    }, 10000);
    return () => clearInterval(timer);
  });
  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.value, target.checked);
  };
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    return checkedItems;
  };
  const problemTable = problem.map((data, idx) => (
    <div>
      <img src={data["img"]} />
      <a
        href={data["url"]}
        className={`${
          checkedItems.has(idx.toString()) ? "solve" : "non_solve"
        }`}
      >
        {data["problem"]}
      </a>
      <input
        className="inp"
        type="checkbox"
        value={idx}
        onChange={(e) => checkHandler(e)}
      />
    </div>
  ));
  return (
    <>
      <div className="con">{problemTable}</div>
    </>
  );
}
