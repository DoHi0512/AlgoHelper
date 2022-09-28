import React, { useEffect, useState } from "react";
import "../static/Search.css";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
export default function Search() {
  const [problems, setProblems] = useState([]);
  let problemDiv;
  useEffect(() => {
    problemDiv = problems.map((data) => (
      <div className="problem">
        <a href={data.href}>{data.title}</a>
      </div>
    ));
  }, [problems]);

  function sub() {
    const name = document.getElementById("q").value;
    axios
      .get("https://solved.ac/api/v3/search/suggestion", {
        params: { query: name },
      })
      .then((res) => {
        console.log(res.data.problems);
        setProblems(res.data.problems);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="search">
      <div className="searchbar">
        <form className="searchForm">
          <input
            type="search"
            id="q"
            className="searchInput"
            placeholder="문제 검색"
          />
          <BiSearch className="searchicon" onClick={sub} />
        </form>
      </div>
      {problemDiv}
    </div>
  );
}
