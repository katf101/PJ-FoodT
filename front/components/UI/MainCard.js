import React from "react";
import styled from "styled-components";
import Image from "next/image";
import foodtruck from "../assests/foodtruck.jpeg";

const MainCard = () => {
  return (
    <MainDiv>
      <CardDiv>
        <ImgDiv>
          <Image src={foodtruck} />
        </ImgDiv>
        <MainBrandNameDiv>
          <BrandNameDiv>
            <TitleDiv>아무말대잔치</TitleDiv>
            <StatusDiv>Open</StatusDiv>
          </BrandNameDiv>
          <div>내용</div>
        </MainBrandNameDiv>
      </CardDiv>
      <CardDiv>
        <ImgDiv></ImgDiv>
        <MainBrandNameDiv>
          <BrandNameDiv>
            <TitleDiv>아무말대잔치</TitleDiv>
            <StatusDiv>Open</StatusDiv>
          </BrandNameDiv>
          <div>내용</div>
        </MainBrandNameDiv>
      </CardDiv>
      <CardDiv>
        <ImgDiv></ImgDiv>
        <MainBrandNameDiv>
          <BrandNameDiv>
            <TitleDiv>아무말대잔치</TitleDiv>
            <StatusDiv>Open</StatusDiv>
          </BrandNameDiv>
          <div>내용</div>
        </MainBrandNameDiv>
      </CardDiv>
      <CardDiv>
        <ImgDiv></ImgDiv>
        <MainBrandNameDiv>
          <BrandNameDiv>
            <TitleDiv>아무말대잔치</TitleDiv>
            <StatusDiv>Open</StatusDiv>
          </BrandNameDiv>
          <div>내용</div>
        </MainBrandNameDiv>
      </CardDiv>
    </MainDiv>
  );
};

export default MainCard;

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid black;
  @media (min-width: 320px) and (max-width: 768px) {
    display: block;
  }
`;

const CardDiv = styled.div`
  display: flex;
  width: 40vw;
  height: 200px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid black;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 80vw;
    height: 147px;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  flex-grow: 2;
  width: 15vw;
  background: #222222;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 320px) and (max-width: 768px) {
    width: 45vw;
  }
`;

const MainBrandNameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandNameDiv = styled.div`
  display: flex;
  width: 500px;
  height: 5vh;
  border: 1px solid black;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 320px) and (max-width: 768px) {
    width: 55vw;
  }
`;

const TitleDiv = styled.div`
  width: 400px;
  margin-top: 10px;
`;

const StatusDiv = styled.div`
  width: 100px;
  margin-top: 10px;
`;
