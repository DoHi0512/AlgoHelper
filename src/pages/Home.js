import React from "react";
import "../static/Home.css";
import { BsArrowRightShort } from "react-icons/bs";
import Footer from "../components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Home() {
  return (
    <div className="container">
      <Carousel autoPlay={true} showThumbs={false} >
        <div className="texts">
          <img
            src="https://static.solved.ac/profile_bg/hanbyeol_stars/hanbyeol_stars.jpg"
            alt="이미지가 표시되지 않음"
          />
          <span>AlgoHelper</span>
        </div>
        <div className="texts">
          <img
            src="https://static.solved.ac/profile_bg/suapc2021s/suapc2021s.png"
            alt="이미지가 표시되지 않음"
          />
          <span>AlgoHelper</span>
        </div>
        <div className="texts">
          <img
            src="https://static.solved.ac/profile_bg/silvercup2022/silvercup2022.png"
            alt="이미지가 표시되지 않음"
          />
          <span>AlgoHelper</span>
        </div>
      </Carousel>

      <div className="discription">
        <div>
          <h2>어떻게 사용하는지 모르겠다면?</h2>
          <p>사용설명서를 확인해 보세요!</p>
          <a href="instruction" className="test">
            설명서 보러 가기
            <BsArrowRightShort className="arrow" />
          </a>
        </div>
        <div>
          <h2>문제를 수준에 맞게 추천해 드려요</h2>
          <p>무엇을 풀지 고민할 필요 없이 추천해주는 문제를 풀 수 있어요</p>
          <a href="recommend" className="test">
            문제 추천받기
            <BsArrowRightShort className="arrow" />
          </a>
        </div>
        <div>
          <h2>자신의 성실도를 한눈에 볼 수 있어요</h2>
          <p>월간,주간 통계 그래프를 통해 확인 할 수 있어요</p>
          <a href="stat" className="test">
            통계 보러 가기
            <BsArrowRightShort className="arrow" />
          </a>
        </div>
        <div>
          <h2>검색 기능을 통해 문제를 검색 할 수 있어요</h2>
          <p>
            제목, 티어, 태그 검색을 통해 찾고싶은 문제를 쉽게 찾아보세요!
          </p>
          <a href="search" className="test">
            문제 검색하기
            <BsArrowRightShort className="arrow" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}