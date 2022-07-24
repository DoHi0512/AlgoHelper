import React from 'react';
import "../static/Register.css"
export default function Register(){
    <>
      <div className="loginBox">
        <form>
          <fieldset>
            <legend>로그인</legend>
            <input type="text" className="id" placeholder="아이디" />
            <input type="password" className="pwd" placeholder="비밀번호" />
            <div className="btns">
              <input type="submit" value="로그인" />
              <button>회원가입</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
}