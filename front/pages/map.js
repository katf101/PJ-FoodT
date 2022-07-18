import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import MainCard from "../components/UI/MainCard";

const apply = () => {
  return (
    <AppLayout>
      <MainDiv>
        <MiddleDiv>
          <MapDiv></MapDiv>
        </MiddleDiv>
      </MainDiv>
      <MainCard />
    </AppLayout>
  );
};

export default apply;

const MapDiv = styled.div`
  margin-top: 20px;

  width: 329px;
  height: 256px;

  background: #cc4c4c;
  border: 1px solid #000000;
`;

const MiddleDiv = styled.div`
  width: 329px;
  height: 628px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  background: #ffffff;
  border: 1px solid #000000;
`;

const MainDiv = styled.div`
  width: 100%;
  height: 628px;

  display: flex;
  justify-content: center;

  background: #53b3ea;
  border-radius: 5px;
`;
