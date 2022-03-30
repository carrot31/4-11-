import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SimpleSlider = () => {

  const settings = {
    arrows: false, //화살표 x
    dots: true, //이동 점
    infinite: true, //끝-처음 반복
    slidesToShow: 1, //한화면에 보이는 개수
    slidesToScroll: 1, //넘어가는 화면 수
    autoplay: true, //자동 플레이
    autoplaySpeed: 5000, //넘어가는 속도 ms
  };

  return (
    <>
    <Title>오늘의 명언</Title>
    <Styled_Slide {...settings}>
      <div>
        <h3>"Wer die Zukunft fürchtet, <br/> verdirbt sich die Gegenwart."</h3>
        <h4>미래를 두려워하는 자는 자신의 현재를 망친다.</h4>
        <h4>-Lothar Schmidt</h4>
      </div>
      <div>
        <h3>"Der Zweck des Lebens <br/> ist das Lebenselbst."</h3>
        <h4>인생의 목적은 인생 그 자체이다.</h4>
        <h4>-Heinrich Heine</h4>
      </div>
      <div>
        <h3>"Es gibt Berge, über die man hinüber muss, <br/> Sonst geht der Weg nicht weiter."</h3>
        <h4>반드시 넘어야 할 산들이 있다. <br/> 그렇지 않으면 길은 더 이상 앞으로 나아가지 않는다.</h4>
        <h4>-Ludwig Thoma</h4>
      </div>
      <div>
        <h3>"Es gibt keine Grenzen, <br/> nur Möglichkeiten."</h3>
        <h4>한계란 없고, 단지 가능성만 있을 뿐이다.</h4>
      </div>
      <div>
        <h3>"Wo ein Wille ist, ist auch ein Weg.  "</h3>
        <h4>뜻이 있는 곳에 길이 있다.</h4>
      </div>
    </Styled_Slide>
    </>
  );
}
const Title = styled.h2`
  margin-top: 120px;
  font-family: 'OTJalollineunharuRA';
  color: #F26565;

`;
const Styled_Slide = styled(Slider)`

    .slick-list{ //얘로 크기조정 했음
    	  width: 1000px;
        height: 220px;
        margin: 10px auto 0px auto;
        background: #FFF0F3; 
        border-radius: 10px;
        align-items: center;
        font-family: 'OTJalollineunharuRA';
        font-size: 20px;
    }
    div{
      margin-top: 3px;
    }
    h3{
      font-style: italic;
    }
    .slick-prev:before, .slick-next:before{ //얘는 양옆 버튼. 커스텀 해줘야 보임
    	font-family: 'slick';
        font-size: 70px;
        line-height: 1;
        opacity: .75; 
        margin-left: 400px; 
        color: red;
        -webkit-font-smoothing: antialiased;
    }
`;
export default SimpleSlider