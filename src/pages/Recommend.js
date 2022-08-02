import React, { useState, useEffect } from "react";
import axios from "axios";
import "../static/Recommend.css";
export default function Recommend(props) {
  const problem = props.problems;
  const urls = props.urls;
  const imgs = props.imgs;
  const problemTable = problem.map((data, idx) => (
    <div>
      <img src={imgs[idx]} />
      <a href={urls[idx]} className="pro">
        {data}
      </a>
    </div>
  ));
  return (
    <>
      <div className="con">{problemTable}</div>
    </>
  );
}
