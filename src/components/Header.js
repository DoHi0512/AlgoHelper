import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/Header.css";
export default function Header() {
  const navi = useNavigate();
  return (
    <header>
      <div className="home" onClick={() => navi("/")}>
        <span className="A">A</span>
        <span className="H">H</span>
      </div>
      <div className="statist" onClick={() => navi("/statist")}>
        통계
      </div>
      <div className="recommend" onClick={() => navi("/recommend")}>
        문제 추천
      </div>
      <div className="login" onClick={() => navi("/login")}>
        LOGIN
      </div>
    </header>
  );
}
