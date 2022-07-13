import React, { useCallback, useState } from "react";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userActions } from "../../reducers/user";

import styled from "styled-components";
import Image from "next/image";

import ModalCard from "../UI/ModalCard";
import ModalLogo from "../assests/ModalLogo.png";
import Link from "next/link";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password);
      dispatch(userActions.login());
      Router.push("/");
    },
    [email]
  );

  return (
    <form onSubmit={onSubmitForm}>
      <LoginDiv>
        <ModalCard>
          <MainDiv>
            <HeaderDiv>
              <Image src={ModalLogo} alt="로고" />
            </HeaderDiv>
            <InputDiv>
              <InputEmail
                name="user-email"
                value={email}
                onChange={onChangeEmail}
                placeholder="이메일"
                required
              />
            </InputDiv>
            <br/>
            <TextDiv>
              가입한 이메일로 비밀번호를 보내드립니다.
            </TextDiv>
              <br/>
            <TextDiv>  
              or
            </TextDiv>
              <br/>
            <TextDiv>
              비밀번호 수정
            </TextDiv>
            <br/>
            <LoginButtonDiv>
              <LoginButton type="primary" htmlType="submit" loading={false}>
                비밀번호 찾기
              </LoginButton>
            </LoginButtonDiv>
          </MainDiv>
        </ModalCard>
      </LoginDiv>
    </form>
  );
};

export default LoginForm;
const TextDiv = styled.span`
  margin-left: 10%;
`;
const LoginButton = styled.button`
  margin-top: 20px;

  box-sizing: border-box;

  width: 344px;
  height: 67px;

  background: #1ab095;
  border: 1px solid #3c6c64;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;

  color: #e0fdd3;
`;

const LoginButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: 82px;

  /* background: #b34d4d; */
  @media (min-width:320px) and (max-width:500px){
    width: 60vw;
    margin-left: 10%;
  }
  @media (min-width:501px) and (max-width:768px){
    width: 60vw;
    margin-left: 10%;
  }
  @media (min-width:992px) and (max-width:1200px){
    width: 45vw;
  }
`;

const InputEmail = styled.input`
  width: 500px;
  height: 40px;

  /* background: #ffffff; */
  @media (min-width:320px) and (max-width:500px){
    width: 60vw;
  }
  @media (min-width:501px) and (max-width:768px){
    width: 60vw;
    margin-left: 10%;
  }
  @media (min-width:992px) and (max-width:1200px){
    width: 45vw;
  }
`;

const InputDiv = styled.div`
  display: block;
  width: 500px;
  height: 95px;
  /* background: #9f7676; */
  @media (min-width:320px) and (max-width:500px){
    padding-left: 10%;
  }
`;

const HeaderDiv = styled.div`
  width: 500px;
  height: 121px;
  /* background: #de8e8e; */
  @media (min-width:320px) and (max-width:768px){
    width: 85vw;
  }
`;

const MainDiv = styled.div`
  margin: auto;
  width: 500px;
  height: 531px;

  /* background: #d9d9d9; */

  z-index: 80;
  @media (min-width:320px) and (max-width:500px){
    width: 100vw;
  }
  @media (min-width:501px) and (max-width:768px){
    width: 80vw;
  }
  @media (min-width:992px) and (max-width:1200px){
    width: 50vw;
  }
`;

const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
`;