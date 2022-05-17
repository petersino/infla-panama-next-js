import React from "react";
import tw from "twin.macro";

const Container = tw.div`
flex 
flex-col
justify-center 
items-center

px-5
`;

const H3 = tw.h3`
  text-center  
  font-avalon
  text-white
  md:text-lg  
  mb-7
`;

const ClientsContainer = tw.div`  
  flex
  justify-center
  overflow-x-auto
  max-w-screen-xl 
  gap-4  
`;

const Client = tw.div`
  bg-gray-300 
  rounded-md 
  w-40
  h-40
`;

const Clients = () => {
  return (
    <Container>
      <H3>CLIENTES QUE CONFIAN EN NOSOTROS</H3>
      <ClientsContainer>
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
        <Client />
      </ClientsContainer>
    </Container>
  );
};

export default Clients;
