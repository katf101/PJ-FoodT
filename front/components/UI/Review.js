import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import FoodTruck from "../assests/foodtruck.jpeg";

const Review = () => {
    return (
      <MainDiv>
        <MainTitleDiv>
          <div>⭐️</div>
          <div>봉천동 푸드트럭</div>
          <ReviewDiv>리뷰</ReviewDiv>
          <WriteDiv>글쓰기</WriteDiv>
        </MainTitleDiv>
        <CardDiv>
          <ImgDiv>
            <Image src={FoodTruck}/>
          </ImgDiv>
          <MainBrandNameDiv>
            <BrandNameDiv>
              <TitleDiv>Consumer1</TitleDiv>
              <ResponseDiv>답글</ResponseDiv>
              <DeclareDiv>신고</DeclareDiv>
              <ModifyDiv>수정</ModifyDiv>
              <DeleteDiv>삭제</DeleteDiv>
            </BrandNameDiv>
            <BrandContentDiv>
              내용 : 목살 마시써요
            </BrandContentDiv>
            <ReviewPlusDiv>▶️ 1개의 댓글 더보기</ReviewPlusDiv>
          </MainBrandNameDiv>
        </CardDiv>
      </MainDiv>
    );
};

export default Review;

const MainDiv = styled.div`
  padding: 5%;
  margin: 3%;
  display: block;
  flex-wrap: wrap;
  background: #DEF3FD;
`;

const MainTitleDiv = styled.div`
  display: flex;
  align-items: center;
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
const WriteDiv = styled.div`
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
  align-items: center;
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
  div {
    &:nth-child(1) {
        display: flex;
        flex-grow: 8;
        margin-left: 5%;
      }
      &:nth-child(2) {
        display: flex;
        flex-grow: 1;
      }
      &:nth-child(3) {
        display: flex;
        flex-grow: 1;
      }
      &:nth-child(4) {
        display: flex;
        flex-grow: 1;
      }
      &:nth-child(5) {
        display: flex;
        flex-grow: 1;
      }
  }
`;

const TitleDiv = styled.div`
  width: 400px;
  margin-top: 10px;
`;
const ResponseDiv = styled.div`

`;
const DeclareDiv = styled.div`

`;
const ModifyDiv = styled.div`

`;
const DeleteDiv = styled.div`

`;
const BrandContentDiv = styled.div`
  padding: 10px;
  margin: 2%;
  width: 93%;
  height: 130px;
  background: #eee;
`;
const ReviewPlusDiv = styled.div`
  margin-left: 5%;
`;