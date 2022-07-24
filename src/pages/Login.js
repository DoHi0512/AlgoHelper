import React from "react";
import "../static/Login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navi = useNavigate();
  return (
    <>
      <div className="loginBox">
        <form>
          <fieldset>
            <legend>로그인</legend>
            <input type="text" className="id" placeholder="아이디" />
            <input type="password" className="pwd" placeholder="비밀번호" />
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
