import React from "react";
import styled from "styled-components";

const MyFoodtCard = ({ children }) => {
  return (
    <MainDiv>
      <LeftDiv>
        <ImageDiv></ImageDiv>
      </LeftDiv>
      <RightDiv>
        <button>-</button>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </RightDiv>
      {children}
    </MainDiv>
  );
};

export default MyFoodtCard;

const ImageDiv = styled.div`
  width: 328px;
  height: 285px;

  background: #ffffff;
  border: 1px solid #8a8383;
`;

const RightDiv = styled.div`
  width: 487px;
  height: 337px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* background: #ba4040; */
`;

const LeftDiv = styled.div`
  width: 355px;
  height: 337px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background: #6b2b2b; */
`;

const MainDiv = styled.div`
  margin-top: 40px;

  width: 842px;
  height: 337px;

  display: flex;

  background: #a1dbdf;
`;
