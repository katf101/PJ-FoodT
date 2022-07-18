import React from "react";
import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import BlueBanner from "../../components/UI/BlueBanner";
import SideMenu from "../../components/UI/SideMenu";
import MyFoodtCard from "../../components/UI/MyFoodTCard";
import Link from "next/link";

const foodt = () => {
  return (
    <>
      <AppLayout />
      <BlueBanner>
        여기는 푸드트럭
        <button>
          <Link href="/apply">open</Link>
        </button>
      </BlueBanner>
      <SideMenu>
        <MainFoodtDiv>
          <FoodtTopDiv>
            <AddButton>+</AddButton>
          </FoodtTopDiv>
          <MyFoodtCard />
          <SaveButton>저장</SaveButton>
        </MainFoodtDiv>
      </SideMenu>
    </>
  );
};

export default foodt;

const SaveButton = styled.button`
  margin-top: 20px;

  width: 105px;
  height: 28px;

  background: #a1dbdf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0px;
  border-radius: 5px;

  &:hover {
    background-color: #6dbdc2;
  }
`;

const AddButton = styled.button`
  margin-top: 20px;
  margin-right: 400px;

  width: 30px;
  height: 30px;
`;

const FoodtTopDiv = styled.div`
  width: 1700px;
  height: 30px;

  display: flex;
  justify-content: right;

  /* background: #e89090; */
`;

const MainFoodtDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  width: 1700px;
  height: 746px;

  /* background: #2c0606; */
`;
