import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-layout">
      <div className="text-layout">
        <p className="Chanel202223MTiersDArt">
          CHANEL 2022/23 공방(Métiers d’art) 컬렉션 미리보기
        </p>
        <p className="AmarAkwayChanel202223MTiersDArt">
          모델 리앤 반 롬페이와 아마르 아콰이(Amar Akway)가 CHANEL 2022/23
          공방(Métiers d’art) <br />
          컬렉션의 세련된 착장을 한 몸처럼 자연스럽게 선보입니다.
        </p>
      </div>
      <div className="Frame2">
        <img className="Image4" src="https://via.placeholder.com/240x360" />
        <img className="Image1" src="https://via.placeholder.com/307x479" />
        <img className="Image2" src="https://via.placeholder.com/480x719" />
        <img className="Image3" src="https://via.placeholder.com/320x479" />
        <img className="Image5" src="https://via.placeholder.com/240x360" />
      </div>
    </div>
  );
};
export {Carousel};
