import React from "react";
import styled from "styled-components";
import Image from "next/image";

import SimpleLine from "../assests/SimpleLine.png";

const SimpleLogin = () => {
  return (
    <MainSimpleLoginDiv>
      <ImageIndex src={SimpleLine} alt="라인" />
      <SimpleLoginDiv>
        <TextSimple>간편로그인</TextSimple>
      </SimpleLoginDiv>
      <ImageIndex src={SimpleLine} alt="라인" />
    </MainSimpleLoginDiv>
  );
};

export default SimpleLogin;

const ImageIndex = styled(Image)`
  z-index: 70;
`;

const SimpleLoginDiv = styled.div`
  display: flex;
  align-items: center;

  width: 68px;
  height: 26px;

  /* background: #d9d9d9; */
`;

const TextSimple = styled.text`
  width: 84px;
  height: 18px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #868484;
`;

const MainSimpleLoginDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 501px;
  height: 24px;

  /* background: #fc9f9f; */
`;
