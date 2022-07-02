import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Link from "./Link";

const colors = {
  green: "#599654",
  blue: "#0C8E9F",
};

const ButtonComponent = styled.button`
  background-color: ${({ color }) => (color ? colors[color] : colors.blue)};
  ${tw`inline-flex items-center justify-center px-3 py-2 space-x-2 rounded-lg `};
`;

const LinkComponent = styled(Link)`
  background-color: ${({ color }) => (color ? colors[color] : colors.blue)};
  ${tw`inline-flex items-center justify-center px-3 py-2 ml-auto space-x-2 rounded-lg `};
`;

const Text = tw.span`
  text-white
  text-sm
  font-semibold   
`;

const Button = ({ children, href, icon, color }) => {
  return href ? (
    <div>
      <LinkComponent href={href} color={color}>
        <Icon style={{ fontSize: "22px", color: "#fff" }} icon={icon} />
        <Text>{children}</Text>
      </LinkComponent>
    </div>
  ) : (
    <ButtonComponent color={color}>
      <Icon style={{ fontSize: "22px", color: "#fff" }} icon={icon} />
      <Text>{children}</Text>
    </ButtonComponent>
  );
  /*  <ButtonComponent>
      <Icon style={{ fontSize: "22px" }} icon={icon} />
      <Text>{children}</Text>
    </ButtonComponent> */
};

export default Button;
