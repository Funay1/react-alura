import React from "react";
import {Img, Nav} from './styled';
import Logo from '../../assets/Logo.png'
import ButtonLink from '../ButtonLink/ButtonLink';
function Menu() {
  return <Nav>
      <Img src={Logo} alt="Funay Logo"></Img>
      <ButtonLink href="Teste" text="Login"></ButtonLink>
      </Nav>;
}
export default Menu;
