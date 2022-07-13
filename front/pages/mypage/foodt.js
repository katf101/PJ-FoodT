import React from "react";
import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import BlueBanner from "../../components/UI/BlueBanner";
import SideMenu from "../../components/UI/SideMenu";

const foodt = () => {
  return (
    <>
      <AppLayout />
      <BlueBanner>여기는 알림</BlueBanner>
      <SideMenu>
        <MainFoodtDiv>
          <FoodtTopDiv></FoodtTopDiv>
          {/* <FoodtBottomDiv></FoodtBottomDiv> */}
          {/* <LikeDiv />
          <LikeDiv /> */}
        </MainFoodtDiv>
      </SideMenu>
    </>
  );
};

export default foodt;

const FoodtTopDiv = styled.div`
  width: 1700px;
  height: 18px;

  background: #e89090;
`;

const MainFoodtDiv = styled.div`
  width: 1728px;
  height: 746px;

  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */

  background: #2c0606;
`;
