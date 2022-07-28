import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../static/Header.css";
import axios from "axios";
export default function Header(props) {
  const [name, setName] = useState("");
  const navi = useNavigate();
  const getAPI = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/ahapp/dohi/userInfo/2/"
      );
      setName(response.data.userName);
    } catch (error) {
      alert(error);
    }
  };
  getAPI();
  return (
    <header>
      <div className="home" onClick={() => navi("/")}>
        <span className="A">A</span>
        <span className="H">H</span>
      </div>
      <div className="statist" onClick={() => navi("/statist")}>
        통계
      </div>
      <div className="recommend" onClick={() => navi("/recommend")}>
        문제 추천
      </div>
      <div className="login" onClick={() => navi("/login")}>
        {name === "" ? "LOGIN" : name}
      </div>
    </header>
  );
}
