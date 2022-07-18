import React from "react";
import styled from "styled-components";
import AppLayout from "../../components/AppLayout";
import BlueBanner from "../../components/UI/BlueBanner";
import SideMenu from "../../components/UI/SideMenu";

const notification = () => {
  return (
    <>
      <AppLayout />
      <BlueBanner>여기는 알림</BlueBanner>
      <SideMenu>
        <MainNotificationDiv>
          <NotificationTopDiv>
            <div
              style={{ width: "842px", height: "54px", background: "#A1DBDF" }}
            ></div>
          </NotificationTopDiv>
          <NotificationBottomDiv>
            <MessageMainDiv>
              <MessageCircle />
              <MessageDiv>목살 다됬다</MessageDiv>
            </MessageMainDiv>
            <MessageMainDiv>
              <MessageCircle />
              <MessageDiv>목살 아직 안됬다</MessageDiv>
            </MessageMainDiv>
          </NotificationBottomDiv>
        </MainNotificationDiv>
      </SideMenu>
    </>
  );
};

export default notification;

const MessageDiv = styled.div`
  width: 842px;
  height: 84px;

  background: #efefef;
`;

const MessageCircle = styled.div`
  width: 50px;
  height: 50px;

  background: #ffb9b9;
`;

const MessageMainDiv = styled.div`
  margin-top: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 1117px;
  height: 121px;

  background: #d9d9d9;
`;

const NotificationBottomDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 1728px;
  height: 100%;

  /* background: #c46262; */
`;

const NotificationTopDiv = styled.div`
  width: 1728px;
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background: #de6969; */
`;

const MainNotificationDiv = styled.div`
  width: 1728px;
  height: 746px;

  /* background: #2c0606; */
`;
