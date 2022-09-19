import React, { useState, useEffect } from "react";
import axios from "axios";
import "../static/Recommend.css";
export default function Recommend() {
  const [problem, setProblem] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/ahapp/problem/`, {
        params: { username : localStorage.getItem("username") },
      })
      .then((Response) => {
        setProblem(Response.data["items"]);
        console.log(Response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
    <div className={idx < 7 ? "show" : "non_show"}>
      <a
        href={`https://www.acmicpc.net/problem/${data["problemId"]}`}
        className={`${
          data["level"] < 6
            ? "bronze"
            : data["level"] < 11
            ? "silver"
            : data["level"] < 16
            ? "gold"
            : data["level"] < 21
            ? "platinum"
            : data["level"] < 26
            ? "diamond"
            : "ruby"
        }`}
      >
        {data["titleKo"]}
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
      <div className="con">
        <form>{problemTable}</form>
      </div>
    </>
  );
}
