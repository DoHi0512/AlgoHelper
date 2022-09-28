import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/Header.css";
export default function Header(props) {
  const navi = useNavigate();
  return (
    <header>
      <div className="home" onClick={() => navi("/")}>
        <span className="A">A</span>
        <span className="H">H</span>
      </div>
      <div className={props.token === null ? "non_show" : "recommend"} onClick={() => navi("/recommend")}>
        주간 문제
      </div>
      <div className={props.token === null ? "non_show" : "recommend"} onClick={()=> navi("/modify")}>
        정보 수정
      </div>
      <div className={props.token === null ? "non_show" : "recommend"} onClick={()=> navi("/search")}>
        문제 검색
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
                localStorage.removeItem("bojId");
                document.location.href = "/";
              }}
            >
              LOGOUT
            </div>
            <div
              className="profile"
              onClick={() =>
                window.open(
                  `https://www.acmicpc.net/user/${localStorage.getItem(
                    "bojId"
                  )}`
                )
              }
            >
              {localStorage.getItem("username")}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
