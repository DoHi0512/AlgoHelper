import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Header.css";
import axios from "axios";
export default function Header(props) {
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
      <div className="info">
        {props.token === null ? (
          <div className="login" onClick={() => navi("/login")}>
            LOGIN
          </div>
        ) : (
          <div className="onLog">
            <div
              className="logout"
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("username");
                document.location.href = "/";
              }}
            >
              LOGOUT
            </div>
            <div className="profile">{localStorage.getItem("username")}</div>
          </div>
        )}
      </div>
    </header>
  );
}
