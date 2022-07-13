import React from "react";
import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import BlueBanner from "../../components/UI/BlueBanner";
import SideMenu from "../../components/UI/SideMenu";

const like = () => {
  return (
    <>
      <AppLayout />
      <BlueBanner>여기는 알림</BlueBanner>
      <SideMenu>
        <MainLikeDiv>
          <LikeDiv />
          <LikeDiv />
        </MainLikeDiv>
      </SideMenu>
    </>
  );
};

export default like;

const LikeDiv = styled.div`
  margin-top: 14px;
  /* margin-bottom: 7px; */

  width: 842px;
  height: 54px;

  background: #ffe0e4;
`;

const MainLikeDiv = styled.div`
  width: 1728px;
  height: 746px;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  /* background: #2c0606; */
`;
