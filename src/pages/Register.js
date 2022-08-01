import React, { useState } from "react";
import "../static/Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navi = useNavigate();
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [pasawdCheck, setPasswdCheck] = useState("");
  const [bojId, setBojId] = useState("");
  async function onReg(e) {
    e.preventDefault();
    const form = {
      username: userName,
      password: passwd,
      password2: pasawdCheck,
      bojid: bojId,
    };
    const response = axios.post("http://127.0.0.1:8000/ahapp/register/", form);
    alert("회원가입 성공")
    document.location.href = "/login";
  }
  return (
    <>
      <div className="registerBox">
        <form onSubmit={onReg}>
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
              type="text"
              className="bojId"
              placeholder="백준 아이디"
              onChange={(e) => {
                setBojId(e.target.value);
              }}
            />
            <input type="submit" value="회원가입" className="submit" />
          </fieldset>
        </form>
      </div>
    </>
  );
}
