import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import FoodTruck from "../assests/foodtruck.jpeg";

const MainCard = () => {
    return (
      <MainDiv>
        <MainTitleDiv>
          <div>⭐️</div>
          <div>봉천동 푸드트럭</div>
          <ReviewDiv>
            <div>
              리뷰
            </div>
          </ReviewDiv>
          <CartDiv>장바구니</CartDiv>
        </MainTitleDiv>
        <CardDiv>
          <ImgDiv>
            <Image src={FoodTruck}/>
          </ImgDiv>
          <MainBrandNameDiv>
            <BrandNameDiv>
              <TitleDiv>메뉴명 : 목살 세트</TitleDiv>
            </BrandNameDiv>
            <BrandContentDiv>
              설명 : 아주 맛있습니다!<br/><br/>
              가격 : 12,000
            </BrandContentDiv>
          </MainBrandNameDiv>
          <BasketPlusDiv>
            +
          </BasketPlusDiv>
        </CardDiv>
        <CardDiv>
          <ImgDiv>
            <Image src={FoodTruck}/>
          </ImgDiv>
          <MainBrandNameDiv>
            <BrandNameDiv>
              <TitleDiv>메뉴명 : 목살 세트</TitleDiv>
            </BrandNameDiv>
            <BrandContentDiv>
              설명 : 아주 맛있습니다!<br/><br/>
              가격 : 12,000
            </BrandContentDiv>
          </MainBrandNameDiv>
          <BasketPlusDiv>
            +
          </BasketPlusDiv>
        </CardDiv>
        <CardDiv>
          <ImgDiv>
            <Image src={FoodTruck}/>
          </ImgDiv>
          <MainBrandNameDiv>
            <BrandNameDiv>
              <TitleDiv>메뉴명 : 목살 세트</TitleDiv>
            </BrandNameDiv>
            <BrandContentDiv>
              설명 : 아주 맛있습니다!<br/><br/>
              가격 : 12,000
            </BrandContentDiv>
          </MainBrandNameDiv>
          <BasketPlusDiv>
            +
          </BasketPlusDiv>
        </CardDiv>
      </MainDiv>
    );
};

export default MainCard;

const MainDiv = styled.div`
  padding: 5%;
  margin: 3%;
  display: block;
  flex-wrap: wrap;
  background: #DEF3FD;
`;

const MainTitleDiv = styled.div`
  display: flex;
  border: 1px solid black;
  background: #FFF;
  padding: 2%;
  div {
    &:nth-child(1) {
      display: flex;
      flex-grow: 1;
    }
    &:nth-child(2) {
      display: flex;
      flex-grow: 5;
      margin-left: 23%;
    }
    &:nth-child(3) {
      display: flex;
      flex-grow: 1;
    }
    &:nth-child(4) {
      display: flex;
      flex-grow: 1;
    }
  }
`;
const ReviewDiv = styled.div`
  display: flex;
  cursor: pointer;
  padding: 5px;
  padding-left: 7%;
  border: 1px solid black;
  @media (min-width:320px) and (max-width:768px){
    padding: 5px;
  }
  @media (min-width:768px) and (max-width:992px){
    padding-left: 5%;
  }
`;
const CartDiv = styled.div`
  cursor: pointer;
  padding: 5px;
  padding-left: 7%;
  border: 1px solid black;
  @media (min-width:320px) and (max-width:768px){
    padding: 5px;
  }
  @media (min-width:768px) and (max-width:992px){
    padding-left: 5%;
  }
`;
const CardDiv = styled.div`
  display: flex;
  width: 70vw;
  height: 300px;
  margin: 0 auto;
  margin-top: 30px;
  border: 1px solid black;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  @media (min-width:320px) and (max-width:768px){
    width: 80vw;
    height: 147px;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  flex-grow: 2;
  width: 15vw;
  min-width: 180px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width:320px) and (max-width:768px){
    width: 45vw;
    min-width:100px;
  }
  @media (min-width:768px) and (max-width:992px){
    width: 45vw;
    min-width:100px;
  }
  @media (min-width:992px) and (max-width:1200px){
    width: 45vw;
    min-width:100px;
  }
`;

const MainBrandNameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandNameDiv = styled.div`
  display: flex;
  width: 45vw;
  height: 5vh;
  padding: 10px;
  border-bottom: 1px solid black;
  @media (min-width:320px) and (max-width:768px){
    width: 55vw;
  }
  @media (min-width:768px) and (max-width:992px){
    width: 45vw;
  }
  @media (min-width:992px) and (max-width:1200px){
    width: 45vw;
  }
`;

const TitleDiv = styled.div`
  width: 400px;
  margin-top: 10px;
`;

const BrandContentDiv = styled.div`
  padding: 10px;
`;

const BasketPlusDiv = styled.div`
  position: absolute;
  margin-left: 77%;
  margin-top: 22%;
  padding: 5px;
  border: 1px solid black;
  @media (min-width:320px) and (max-width:500px){
    margin-left: 77%;
    margin-top: 110px;
  }
  @media (min-width:501px) and (max-width:768px){
    margin-left: 75%;
    margin-top: 110px;
  }
  @media (min-width:769px) and (max-width:1199px){
    margin-left: 66%;
    margin-top: 260px;
  }
  @media (min-width:1200px){
    margin-left: 66%;
    margin-top: 260px;
  }
`;