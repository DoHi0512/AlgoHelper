import React, { useState } from "react";
import "../static/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const navi = useNavigate();
  async function onLogin(e) {
    e.preventDefault();
    const form = { username: userName, password: pwd };
    const response = await axios.post(
      "http://127.0.0.1:8000/ahapp/login/",
      form
    );
    localStorage.setItem("token", response.data["token"]);
    localStorage.setItem("username", userName);
    if ((await response).status == 400) console.log("로그인 실패");
    else {
      console.log("로그인 성공");
      document.location.href = "/";
    }
  }
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
