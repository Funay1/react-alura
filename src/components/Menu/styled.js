import styled from "styled-components";
export const Img = styled.img`
  // width: 30vw;
  height: 40px;
  max-width: 168px;
  @media (max-width: 800px) {
    max-width: 105px;
  }
`;
export const Nav = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;


  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);

  @media (max-width: 800px){
    height: 40px;
    justify-content: center;
  }
`;
