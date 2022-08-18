import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Header.css";
import axios from "axios";
export default function Header(props) {
  const [id, setId] = useState("");
  async function pullId() {
    const form = { name: localStorage.getItem("username") };
    const response = axios.post("http://127.0.0.1:8000/ahapp/getboj/", form);
    setId((await response).data);
  }
  useEffect(() => {
    pullId();
  }, []);
  console.log(id);
  const navi = useNavigate();
  return (
    <header>
      <div className="home" onClick={() => navi("/")}>
        <span className="A">A</span>
        <span className="H">H</span>
      </div>
      <div className="statist" onClick={() => navi("/stat")}>
        통계
      </div>
      <div className="recommend" onClick={() => navi("/recommend")}>
        주간 문제
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
                localStorage.removeItem("problem");
                document.location.href = "/";
              }}
            >
              LOGOUT
            </div>
            <div className="profile" onClick={() => window.open(`https://www.acmicpc.net/user/${id}`)}>{localStorage.getItem("username")}</div>
          </div>
        )}
      </div>
    </header>
  );
}
