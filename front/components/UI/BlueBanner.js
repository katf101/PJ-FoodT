import React from "react";
import styled from "styled-components";

const BlueBanner = ({ children }) => {
  return <MainDiv>{children}</MainDiv>;
};

export default BlueBanner;

const MainDiv = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto;

  background: #53b3ea;
  border-radius: 12px;
`;
