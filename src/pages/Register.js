import React, { useState } from "react";
import "../static/Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {
  const navi = useNavigate();
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [pasawdCheck, setPasswdCheck] = useState("");
  return (
    <>
      <div className="registerBox">
        <form action="POST">
          <fieldset>
            <legend>회원 가입</legend>
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
                setPasswd(e.target.value);
              }}
            />
            <input
              type="password"
              className="pwdCheck"
              placeholder="비밀번호 재확인"
              onChange={(e) => {
                setPasswdCheck(e.target.value);
              }}
            />

            <input
              type="submit"
              value="회원가입"
              className="submit"
              onClick={() => {
                axios
                  .post("http://127.0.0.1:8000/ahapp/dohi/register/", {
                    userName: userName,
                    pwd: passwd,
                  })
                  .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              }}
            />
          </fieldset>
        </form>
      </div>
    </>
  );
}
