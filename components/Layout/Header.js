import React from "react";
import Link from "../Link";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import Button from "../Button";
import MobileNav from "../NavBar/MobileNav";

const HeaderElement = styled.header`
  background-color: #242d57;
  height: 69px;
  ${tw`sticky top-0 z-30 w-full text-gray-200`}
`;

const Nav = tw.nav`
  max-w-screen-xl 
  px-6 
  sm:px-8 
  lg:px-16
  mx-auto 
  grid 
  grid-flow-col 
  py-3 
  sm:py-4
`;

const LogoContainer = tw.div`
  col-start-1 
  col-end-2
  flex 
  items-center
`;
const LeftMenuContainer = tw.ul`
  hidden 
  lg:flex 
  space-x-6
  col-start-4 
  col-end-8 
  items-center
`;

const MenuElement = tw.li`

cursor-pointer 
inline-block 
relative
font-avalon
text-sm
hover:text-gray-400
`;

const RightMenuContainer = tw.div`
  hidden 
  lg:flex 
  space-x-6
  col-start-10 
  col-end-12 
  justify-end 
  items-center
`;

const MenuContainerMobile = tw.div`
  lg:hidden
  col-start-10 
  col-end-12    
  flex 
  justify-end 
  items-center
`;

const Header = () => {
  return (
    <HeaderElement>
      <Nav>
        <LogoContainer>
          <Image
            src="/images/logo-blanco.png"
            alt="logo"
            width="189"
            height="33"
          />
        </LogoContainer>
        <LeftMenuContainer>
          <Link href="/nosotros">
            <MenuElement>INICIO</MenuElement>
          </Link>
          <MenuElement>PRODUCTOS</MenuElement>
          <MenuElement>PROMOCIONES</MenuElement>
        </LeftMenuContainer>
        <RightMenuContainer>
          <MenuElement>QUIENES SOMOS</MenuElement>
          <MenuElement>CONTACTO</MenuElement>
          <Button
            href="https://api.whatsapp.com/send?phone=584244732572&text=%C2%A1Hola!%20Te%20escribo%20desde%20la%20p%C3%A1gina%20web."
            icon="logos:whatsapp"
            color="green"
          >
            Whatsapp
          </Button>
        </RightMenuContainer>
        <MenuContainerMobile>
          <MobileNav />
        </MenuContainerMobile>
      </Nav>
    </HeaderElement>
  );
};

export default Header;
