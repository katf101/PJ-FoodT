import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";

const apply = () => {
  return (
    <AppLayout>
      <MainDiv>
        <MiddleDiv>
          <MapDiv></MapDiv>
          <Input />
          <Input />
          <Notice />
          <OpenButton>OPEN</OpenButton>
          <ClosedButton>CLOSED</ClosedButton>
        </MiddleDiv>
      </MainDiv>
    </AppLayout>
  );
};

export default apply;

const ClosedButton = styled.button`
  margin-top: 20px;

  width: 269px;
  height: 30px;

  background: #a1dbdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0px;
  border-radius: 5px;

  &:hover {
    background-color: #6dbdc2;
  }
`;

const OpenButton = styled.button`
  margin-top: 20px;

  width: 269px;
  height: 30px;

  background: #a1dbdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0px;
  border-radius: 5px;

  &:hover {
    background-color: #6dbdc2;
  }
`;

const Notice = styled.textarea`
  margin-top: 10px;

  width: 269px;
  height: 115px;

  background: #ffffff;
  border: 1px solid #000000;
`;

const Input = styled.input`
  margin-top: 10px;

  width: 269px;
  height: 29px;

  background: #ffffff;
  border: 1px solid #000000;
`;

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
