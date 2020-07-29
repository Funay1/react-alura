import React from "react";
import { Button } from "./styled";

function ButtonLink(props) {
  const { href, text } = props;
  return <Button href={href}>{text}</Button>;
}
export default ButtonLink;
