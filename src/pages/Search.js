import React, { useEffect, useState } from "react";
import "../static/Search.css";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
export default function Search() {
  const [problems, setProblems] = useState([]);
  function sub() {
    const name = document.getElementById("q").value;
    axios
      .get("https://solved.ac/api/v3/search/problem", {
        params: { query: name },
      })
      .then((res) => {
        console.log(res.data.count)
        if(res.data.count === 0) alert("검색 결과 없음")
        else setProblems(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const problemDiv = problems.map((data) => (
    <div className="problem">
      <a
        href={`https://www.acmicpc.net/problem/${data.problemId}`}
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
        {data.titleKo}
      </a>
    </div>
  ));
  return (
    <div className="search">
      <div className="searchbar">
        <form className="searchForm" >
          <input type="text" className="non_show"/>
          <input
            type="text"
            id="q"
            className="searchInput"
            placeholder="문제 검색"
          />
          <BiSearch className="searchicon" onClick={sub} />
        </form>
      </div>
      <div className="pros">{problemDiv}</div>
    </div>
  );
}
