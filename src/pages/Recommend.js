import React, { useState, useEffect } from "react";
import axios from "axios";
import "../static/Recommend.css";
export default function Recommend() {
  const tierList = [
    "b5",
    "b4",
    "b3",
    "b2",
    "b1",
    "s5",
    "s4",
    "s3",
    "s2",
    "s1",
    "g5",
    "g4",
    "g3",
    "g2",
    "g1",
    "p5",
    "p4",
    "p3",
    "p2",
    "p1",
    "d5",
    "d4",
    "d3",
    "d2",
    "d1",
    "r5",
    "r4",
    "r3",
    "r2",
    "r1",
  ];
  const [problem, setProblem] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://solved.ac/api/v3/user/show?handle=${localStorage.getItem(
          "bojId"
        )}`
      );
      const newTier =
        tierList[response.data["tier"] - 4] +
        ".." +
        tierList[response.data["tier"] + 2];
      localStorage.setItem("tier", response.data["tier"]);
      axios
        .get(
          `https://solved.ac/api/v3/search/problem?query=*${newTier}+lang%3Ako+%21%40${localStorage.getItem(
            "bojId"
          )}&sort=random&direction=asc&page=1`
        )
        .then((Response) => {
          setProblem(Response.data["items"]);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
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
        <div>
          <a className="dif">
            문제 범위 :{" "}
            {` ${
              tierList[localStorage.getItem("tier") - 4] === undefined
                ? "b5"
                : tierList[localStorage.getItem("tier") - 4]
            } ~ ${
              tierList[localStorage.getItem("tier") - -2] === undefined
                ? "r1"
                : tierList[localStorage.getItem("tier") - -2]
            }`}
          </a>
        </div>
        <form>{problemTable}</form>
      </div>
    </>
  );
}
