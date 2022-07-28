import React, { useState } from "react";
import "../static/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const navi = useNavigate();
  let res = -1;
  return (
    <>
      <div className="loginBox">
        <form>
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
              <input
                type="submit"
                value="로그인"
                onClick={() => {
                  axios
                    .post("http://127.0.0.1:8000/ahapp/dohi/loginCheck/", {
                      userName: userName,
                      pwd: pwd,
                    })
                    .then(function (response) {
                      alert("로그인 성공");
                    })
                    .catch(function (error) {
                      alert("비밀번호 또는 패스워드가 잘못되었습니다.");
                    });
                }}
              />
              <button onClick={() => navi("/register")}>회원가입</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
