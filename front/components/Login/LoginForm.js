import React, { useCallback, useState } from "react";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { userActions } from "../../reducers/user";

import styled from "styled-components";
import Image from "next/image";

import SimpleLogin from "./SimpleLogin";
import ModalCard from "../UI/ModalCard";
import ModalLogo from "../assests/ModalLogo.png";
import Link from "next/link";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(email, password);
      dispatch(userActions.login());
      Router.push("/");
    },
    [email, password]
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
              <InputPw
                name="user-password"
                value={password}
                onChange={onChangePassword}
                placeholder="비밀번호"
                required
              />
            </InputDiv>
            <LoginButtonDiv>
              <LoginButton type="primary" htmlType="submit" loading={false}>
                로그인
              </LoginButton>
            </LoginButtonDiv>
            <FindDiv>
              <Ul>
                <li>
                  <FindLabel>
                    <Link href='/findpw'>
                      비밀번호 찾기
                    </Link>
                  </FindLabel>
                </li>
                <li style={{ marginLeft: "20px", marginRight: "50px" }}>
                  <FindLabel>
                    <Link href='/signup'>
                      회원가입
                    </Link>
                  </FindLabel>
                </li>
              </Ul>
            </FindDiv>
            <SimpleLogin />
          </MainDiv>
        </ModalCard>
      </LoginDiv>
    </form>
  );
};

export default LoginForm;
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
const FindLabel = styled.a`
  /* 비밀번호 찾기 */
  /* width: 82px;
  height: 16px; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #868484;
`;

const FindDiv = styled.div`
  width: 501px;
  height: 30px;
  /* background: #ffffff; */
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

const InputPw = styled.input`
  margin-top: 10px;
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
