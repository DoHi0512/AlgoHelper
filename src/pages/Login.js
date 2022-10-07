import React, { useEffect, useState } from "react";
import "../static/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { tokenState } from "../App";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [token, setToken] = useRecoilState(tokenState);
  const navi = useNavigate();
  function onLogin(e) {
    e.preventDefault();
    const form = { name: userName, password: pwd };
    axios
      .post("http://127.0.0.1:8000/ahapp/login/", form)
      .then((response) => {
        if (response.data["token"] === "error") {
          alert("아이디 또는 비밀번호가 틀렸습니다");
        } else {
          setToken((prev) => response.data["token"]);
          localStorage.setItem("token", response.data["token"]);
          localStorage.setItem("username", userName);
          alert("로그인 성공");
          document.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="loginbox">
        <form onSubmit={onLogin}>
          <div className="btns">
            <input
              type="text"
              placeholder="아이디"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
          </div>
          <div className="subs">
            <input type="submit" value="로그인" />
          </div>
          <p>
            아이디가 없으시다면?
            <a href="register" className="go">
              {" 회원가입"}
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
