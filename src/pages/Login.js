import React, { useEffect, useState } from "react";
import "../static/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [token, setToken] = useState("");
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
          setToken(response.data["token"]);
          localStorage.setItem("token", response.data["token"]);
          localStorage.setItem("username", userName);
          alert("로그인 성공");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      console.log(localStorage.getItem("token"));
      console.log(localStorage.getItem("username"));
      axios
        .get("http://127.0.0.1:8000/ahapp/getboj/", {
          params: { name: localStorage.getItem("username") },
        })
        .then((response) => {
          localStorage.setItem("bojId", response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      document.location.href = "/";
    }
  }, [, localStorage.getItem("token")]);
  return (
    <>
      <div className="loginBox">
        <form onSubmit={onLogin}>
          <fieldset>
            <legend>로그인</legend>
            <input
              type="text"
              className="id"
              placeholder="아이디"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="password"
              className="pwd"
              placeholder="비밀번호"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
            <div className="btns">
              <input type="submit" value="로그인" />
              <button onClick={() => navi("/register")}>회원가입</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
