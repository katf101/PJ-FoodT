import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import FoodTruck from "../assests/foodtruck.jpeg";
import Link from "next/link";

const MainCard = () => {
    return (
      <MainDiv>
        <CardDiv>
          <ImgDiv>
            <Image src={FoodTruck}/>
          </ImgDiv>
          <MainBrandNameDiv>
            <BrandNameDiv>
              <TitleDiv>
                <Link href="/restaurant/menu">
                  아무말대잔치
                </Link>
              </TitleDiv>
              <StatusDiv>Open</StatusDiv>
            </BrandNameDiv>
            <BrandContentDiv>
              내용
            </BrandContentDiv>
          </MainBrandNameDiv>
        </CardDiv>
        <CardDiv>
          <ImgDiv>
            <Image src={FoodTruck} />
          </ImgDiv>
          <MainBrandNameDiv>
            <BrandNameDiv>
              <TitleDiv>아무말대잔치</TitleDiv>
              <StatusDiv>Open</StatusDiv>
            </BrandNameDiv>
            <BrandContentDiv>
              내용
            </BrandContentDiv>
          </MainBrandNameDiv>
        </CardDiv>
        <CardDiv>
          <ImgDiv>
            <Image src={FoodTruck} />
          </ImgDiv>
          <MainBrandNameDiv>
            <BrandNameDiv>
              <TitleDiv>아무말대잔치</TitleDiv>
              <StatusDiv>Open</StatusDiv>
            </BrandNameDiv>
            <BrandContentDiv>
              내용
            </BrandContentDiv>
          </MainBrandNameDiv>
        </CardDiv>
        <CardDiv>
          <ImgDiv>
            <Image src={FoodTruck} />
          </ImgDiv>
          <MainBrandNameDiv>
            <BrandNameDiv>
              <TitleDiv>아무말대잔치</TitleDiv>
              <StatusDiv>Open</StatusDiv>
            </BrandNameDiv>
            <BrandContentDiv>
              내용
            </BrandContentDiv>
          </MainBrandNameDiv>
        </CardDiv>
      </MainDiv>
      
    );
};

export default MainCard;

const MainDiv =  styled.div`
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  @media (min-width:320px) and (max-width:768px){
    display: block
  }
`;

const CardDiv = styled.div`
  display: flex;
  width: 40vw;
  height: 200px;
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
  width: 25vw;
  height: 5vh;
  padding: 10px;
  border-bottom: 1px solid black;
  @media (min-width:320px) and (max-width:768px){
    width: 55vw;
  }
  @media (min-width:768px) and (max-width:992px){
    width: 20vw;
  }
  @media (min-width:992px) and (max-width:1200px){
    width: 20vw;
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
const BrandContentDiv = styled.div`
  padding: 10px;
`;
