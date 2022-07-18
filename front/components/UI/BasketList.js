import React from 'react';
import styled from "styled-components";

const BasketList = () => {
  return (
    <MainDiv>
      <MainTitleDiv>
        <div>주문서</div>
        <div>장바구니</div>
      </MainTitleDiv>
      <MainContentDiv>
        <MainTable>
          <tr>
            <td colspan='5'>목살 세트</td>
            <td colspan='1'>x 1</td>
            <td>12000</td>
            <td>+</td>
            <td>-</td>
          </tr>
          <tr style={{borderTop : '1px solid #444444'}}>
            <td colspan='5'>회오리 감자</td>
            <td colspan='1'>x 1</td>
            <td>2500</td>
            <td>+</td>
            <td>-</td>
          </tr>
          <tr style={{borderTop : '1px solid #444444'}}>
            <td colspan='5'></td>
            <td colspan='1'></td>
            <td>14500</td>
          </tr>
        </MainTable>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <OrderButton>14500원 주문하기</OrderButton>
        <OrderButton>더 담고싶어요</OrderButton>
      </MainContentDiv>
    </MainDiv>
  )
}

export default BasketList;

const MainDiv = styled.div`
  padding: 5%;
  margin: 3%;
  display: block;
  flex-wrap: wrap;
  background: #DEF3FD;
`;

const MainTitleDiv = styled.div`
  display: flex;
  align-items: center;
  background: #FFF;
  padding: 2%;  
  div {
    &:nth-child(1) {
      display: flex;
      flex-grow: 9;
      margin-left: 45%;
    }
    &:nth-child(2) {
      display: flex;
      flex-grow: 1;
    }
  }
`;
const MainContentDiv = styled.div`
  padding: 5%;
  margin: 1%;
  display: block;
  flex-wrap: wrap;
  background: #fff;
`;
const MainTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const OrderButton = styled.div`
  border: 1px solid #444444;
  border-radius: 5px;
  text-align: center;
  margin: 0 auto;
  margin-top: 15px;
  padding-top: 1%;
  width: 15vw;
  height: 30px;
  cursor: pointer;
  @media (min-width:320px) and (max-width:768px){
    width: 30vw;
    min-width:100px;
  }
`;