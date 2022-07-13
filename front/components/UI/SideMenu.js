import React from "react";
import styled from "styled-components";
import Link from "next/link";

const SideMenu = ({ children }) => {
  return (
    <MainDiv>
      <SideDiv>
        <ListDiv>
          <ul style={{ listStyle: "none", height: "500px" }}>
            <LI>
              <Link href="/mypage/profile">내 정보</Link>
            </LI>
            <LI>
              <Link href="/mypage/notification">알림</Link>
            </LI>
            <LI>
              <Link href="/mypage/like">좋아요</Link>
            </LI>
            <LI>
              <Link href="/mypage/foodt">내 푸드트럭</Link>
            </LI>
            <LI line>_____________</LI>
            <LI>
              <Link details href="/mypage/buyList">
                구매내역
              </Link>
            </LI>
            <LI>
              <Link href="/mypage/sellList">판매내역</Link>
            </LI>
          </ul>
        </ListDiv>
      </SideDiv>
      {children}
    </MainDiv>
  );
};

export default SideMenu;

const LI = styled.li`
  /* margin-top: 15px; */
  margin-top: ${(props) => (props.details ? "50px" : "15px")};
  margin-top: ${(props) => (props.line ? "50px" : "")};
`;

const ListDiv = styled.div`
  /* margin: auto; */

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;

  width: 162px;
  height: 652px;

  /* background: #d9d9d9; */
`;

const SideDiv = styled.div`
  /* box-sizing: border-box; */
  /* position: absolute; */
  width: 192px;
  height: 746px;
  /* left: 0px; */
  /* top: 323px; */

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fcfafa;
  /* border: 1px solid #ededed; */
`;

const MainDiv = styled.div`
  /* Rectangle 64 */

  position: absolute;

  display: flex;

  width: 1920px;
  height: 746px;
  /* left: 0px; */
  /* top: 323px; */

  /* background: #d9d9d9; */
`;
