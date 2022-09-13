import React, { useState, useEffect } from "react";
import axios from "axios";
import "../static/Recommend.css";
export default function Recommend() {
  const [problem, setProblem] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  useEffect(() => {
    axios
      .get("https://solved.ac/api/v3/search/problem?query=*r2..r1")
      .then((Response) => {
        setProblem(Response.data["items"]);
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
    <div>
      <a
        href={`https://www.acmicpc.net/problem/${data["problemId"]}`}
        className={`${
          checkedItems.has(idx.toString()) ? "solve" : "non_solve"
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
      <div className="con">{problemTable}</div>
    </>
  );
}
