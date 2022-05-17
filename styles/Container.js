import tw from "twin.macro";
import styled from "styled-components";

const Container = tw.div`
  flex 
  flex-col
  justify-center 
  items-center
  bg-gray-200
  border-2
  border-gray-600 
  rounded-md 
  py-5
  px-5
`;

const H3 = tw.h3`
  text-center  
  font-avalon
  md:text-lg  
  mb-7
`;

export { Container, H3 };
