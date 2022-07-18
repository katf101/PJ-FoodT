import React from "react";
import AppLayout from "../../components/AppLayout";
import BlueBanner from "../../components/UI/BlueBanner";
import SideMenu from "../../components/UI/SideMenu";

import styled from "styled-components";

const profile = () => {
  return (
    <>
      <AppLayout />
      <BlueBanner>내 정보</BlueBanner>
      <SideMenu>
        <MainProfileDiv>
          <ProfileTopDiv>
            <ThumbnailTopDiv>
              <ThumbnailDiv></ThumbnailDiv>
            </ThumbnailTopDiv>
            <ThumbnailBottomDiv>
              <EditButton>편집</EditButton>
            </ThumbnailBottomDiv>
          </ProfileTopDiv>
          <ProfileBottomDiv>
            <InputDiv>
              <Input type="text" placeholder="이메일" />
              <Input type="text" placeholder="닉네임" />
              <Input type="text" placeholder="상호명" />
            </InputDiv>
          </ProfileBottomDiv>
        </MainProfileDiv>
      </SideMenu>
    </>
  );
};

export default profile;

const Input = styled.input`
  margin-bottom: 25px;

  width: 375px;
  height: 48px;

  background: #ffffff;
  border: 1px solid #000000;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  width: 1087px;
  height: 100%;

  /* background: #e68888; */
`;

const ProfileBottomDiv = styled.div`
  display: flex;
  justify-content: center;

  width: 1726px;
  height: 100%;

  /* background: #c46262; */
`;

const EditButton = styled.button`
  width: 132px;
  height: 39px;

  background: #c1bfbf;
  border: 1px solid #8a8383;
`;

const ThumbnailBottomDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1728px;
  height: 81px;

  /* background: #bf2828; */
  /* border: 1px solid #8a8383; */
`;

const ThumbnailDiv = styled.div`
  width: 323px;
  height: 241px;

  background: #c1bfbf;
`;

const ThumbnailTopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1728px;
  height: 278px;

  /* background: #591b1b; */
  /* border: 1px solid #8a8383; */
`;

const ProfileTopDiv = styled.div`
  width: 1726px;
  height: 353px;

  /* background: #de6969; */
`;

const MainProfileDiv = styled.div`
  width: 1728px;
  height: 746px;

  /* background: #2c0606; */
`;
