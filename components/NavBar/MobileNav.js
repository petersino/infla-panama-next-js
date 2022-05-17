import { useState } from "react";
import Link from "../Link";
import headerNavLinks from "../../data/headerNavLinks";
import tw, { styled } from "twin.macro";
import HamburgerButton from "./HamburgerButton";
import Button from "../Button";

const NavContainer = styled.div(({ navShow }) => [
  tw`fixed right-0 z-10 w-full h-full duration-300 ease-in-out transform bg-gray-200 top-16 opacity-95`,
  navShow ? tw`translate-x-0` : tw`translate-x-full`,
]);

const BgToggleModal = tw.button`
  fixed 
  w-full 
  h-full 
  cursor-auto 
  focus:outline-none
`;
const Nav = tw.nav`
  fixed 
  h-full 
  mt-8
`;

const LinkWrapper = tw.div`
  px-12 
  py-4
`;

const LinkSt = tw(Link)`
  text-2xl 
  font-bold 
  tracking-widest 
  text-gray-900 
  

`;

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow(status => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <>
      <HamburgerButton onToggleNav={onToggleNav} navShow={navShow} />
      <NavContainer navShow={navShow}>
        <BgToggleModal
          type="button"
          aria-label="toggle modal"
          onClick={onToggleNav}
        ></BgToggleModal>
        <Nav>
          {headerNavLinks.map(link => (
            <LinkWrapper key={link.title}>
              <LinkSt href={link.href} onClick={onToggleNav}>
                {link.title}
              </LinkSt>
            </LinkWrapper>
          ))}
          <LinkWrapper>
            <Button
              href="https://api.whatsapp.com/send?phone=584244732572&text=%C2%A1Hola!%20Te%20escribo%20desde%20la%20p%C3%A1gina%20web."
              icon="logos:whatsapp"
              color="green"
            >
              Whatsapp
            </Button>
          </LinkWrapper>
        </Nav>
      </NavContainer>
    </>
  );
};

export default MobileNav;
