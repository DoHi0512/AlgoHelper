import React from "react";
import "../static/Search.css";
export default function Search() {
  return (
    <div className="search">
      <div className="searchbar">
        <form>
          <p>문제 검색</p>
          <input type="search" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
