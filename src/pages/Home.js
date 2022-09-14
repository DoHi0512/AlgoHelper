import React, { useEffect } from "react";
import { useState } from "react";
import ApexCharts from "react-apexcharts";
import "../static/Home.css";
export default function Home() {
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({});
  function setWeek() {
    setSeries([
      {
        name: "Solved",
        data: [10, 41, 35, 51, 49, 62, 69],
      },
    ]);
    setOptions({
      chart: {
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "주간 통계",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
      },
    });
  }
  function setMonth() {
    setSeries([
      {
        name: "Solved",
        data: [13, 21, 65, 51, 19, 92, 19, 53, 42, 72, 95, 71],
      },
    ]);
    setOptions({
      chart: {
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "월간 통계",
        align: "center",
      },
      grid: {
        row: {
          colors: ["#f3f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    });
  }
  useEffect(() => {
    setWeek();
  }, []);
  return (
    <div className="stat">
      {localStorage.getItem("token") === null ? (
        <a href="/login" className="plz">
          로그인을 해주세요
        </a>
      ) : (
        <div className="select">
          <div>
            <p onClick={() => setWeek()}>주간</p>
            <p onClick={() => setMonth()}>월간</p>
          </div>
          <div className="chart">
            <ApexCharts
              options={options}
              series={series}
              type="line"
              width={1000}
              height={600}
            />
          </div>
        </div>
      )}
    </div>
  );
}
