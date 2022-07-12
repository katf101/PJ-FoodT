import React from "react";
import Router from "next/router";
import styled from "styled-components";

const ModalCard = ({ children }) => {
  const onBackHandler = () => {
    Router.back();
  };

  return (
    <>
      <BackDrop onClick={onBackHandler} />
      <Modal>{children}</Modal>
    </>
  );
};

export default ModalCard;

const Modal = styled.div`
  margin: auto;
  margin-top: -150px;
  width: 648px;
  height: 618px;

  background: #a1dbdf;
  border: 1px solid #22665e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 15px;

  z-index: 78;
`;

const BackDrop = styled.div`
  position: absolute;
  width: 1920px;
  height: 1020px;
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.6);

  z-index: 77;
`;
