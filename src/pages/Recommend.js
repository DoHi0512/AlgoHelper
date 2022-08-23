import React, { useState, useEffect } from "react";
import axios from "axios";
import "../static/Recommend.css";
export default function Recommend() {
  const problem = JSON.parse(localStorage.problem)
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked)
    checkedItemHandler(target.value, target.checked);
  }
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id)
      setCheckedItems(checkedItems)
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id)
      setCheckedItems(checkedItems)
    }
    return checkedItems
  }
  const problemTable = problem.map((data,idx) => (
    <div>
      <img src={data["img"]} />
      <a href={data["url"]}
        className={`${checkedItems.has(idx.toString()) ? "solve" : "non_solve"
          }`}
      >{data['problem']}</a>
      <input className="inp"
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
