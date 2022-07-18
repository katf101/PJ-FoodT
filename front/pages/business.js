import React from "react";
import AppLayout from "../components/AppLayout";
import BlueBanner from "../components/UI/BlueBanner";
import styled from "styled-components";

const business = () => {
  return (
    <>
      <AppLayout>
        <BlueBanner>여기는 사업자 신청</BlueBanner>
        <MainDiv>
          <input type="text" placeholder="이메일/고정" />
          <input type="text" placeholder="연락 받을 이메일" />
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="연락처" />
          <button>신청하기</button>
        </MainDiv>
      </AppLayout>
    </>
  );
};

export default business;

const MainDiv = styled.div`
  width: 100%;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #a1dbdf;
  border-radius: 5px;

  input {
    &:nth-child(1) {
      margin-top: 24px;

      width: 248px;
      height: 36px;
    }
    &:nth-child(2) {
      margin-top: 24px;

      width: 248px;
      height: 36px;
    }
    &:nth-child(3) {
      margin-top: 24px;

      width: 248px;
      height: 36px;
    }
    &:nth-child(4) {
      margin-top: 24px;
      margin-bottom: 24px;

      width: 248px;
      height: 36px;
    }
  }
`;
