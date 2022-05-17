import React from "react";
import tw from "twin.macro";
import { Container, H3 } from "../../../styles/Container";
import Button from "../../Button";

const FormContainer = tw.div`
  w-full
`;

const Form = tw.form`
  flex 
  flex-col 
  justify-center
  px-8 
  pt-6 
  pb-8 
  mb-4 
  bg-gray-300
  rounded 
  shadow-md
`;

const Label = tw.label`
  mb-2 
  text-sm 
  font-bold 
  text-gray-700
`;

const Input = tw.input`
  w-full
  px-3 
  py-5
  leading-tight 
  text-gray-700 
  border
  border-gray-400
  rounded 
  shadow 
  focus:outline-none
  appearance-none 
`;

const CheckBoxContainer = tw.div`
  flex 
  flex-wrap
  justify-center
  my-5
  gap-7
  
  md:px-24

  
`;

const CheckBoxWrapper = tw.div` 
  flex 
  justify-center 
  items-center
 
  
`;

const CheckBoxInput = tw.input`  
  h-5
  w-5
  border 
  border-gray-300 
  rounded-sm 
  bg-gray-500 

  focus:outline-none 
  transition 
  duration-200 
  

  mr-2 
  cursor-pointer
`;

const CheckBoxLabel = tw.label`  
  inline-block 
  text-gray-800
  w-44
  
  
`;

const PriceListForm = () => {
  return (
    <Container>
      <H3>LISTA DE PRECIOS</H3>
      <FormContainer>
        <Form>
          <Label htmlFor="email">CORREO ELÉCTRONICO</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="TU@EMAIL.COM"
          />

          <CheckBoxContainer>
            <CheckBoxWrapper>
              <CheckBoxInput
                type="checkbox"
                id="checkbox1"
                name="producto"
                value="option1"
              />
              <CheckBoxLabel htmlFor="checkbox1">
                Inflables publicitarios
              </CheckBoxLabel>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
              <CheckBoxInput
                type="checkbox"
                id="checkbox2"
                name="producto"
                value="option2"
              />
              <CheckBoxLabel htmlFor="checkbox2">
                Inflables infantiles
              </CheckBoxLabel>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
              <CheckBoxInput
                type="checkbox"
                id="checkbox3"
                name="producto"
                value="option3"
              />
              <CheckBoxLabel htmlFor="checkbox3">Baby gym</CheckBoxLabel>
            </CheckBoxWrapper>

            <CheckBoxWrapper>
              <CheckBoxInput
                type="checkbox"
                id="checkbox4"
                name="producto"
                value="option4"
              />
              <CheckBoxLabel htmlFor="checkbox4">
                Maquinas e insumos
              </CheckBoxLabel>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
              <CheckBoxInput
                type="checkbox"
                id="checkbox5"
                name="producto"
                value="option5"
              />
              <CheckBoxLabel htmlFor="checkbox5">Puffs</CheckBoxLabel>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
              <CheckBoxInput
                type="checkbox"
                id="checkbox6"
                name="producto"
                value="option6"
              />
              <CheckBoxLabel htmlFor="checkbox6">Banderolas</CheckBoxLabel>
            </CheckBoxWrapper>
          </CheckBoxContainer>
          <div className="self-center mt-5">
            <Button icon="majesticons:send-line">Enviar</Button>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default PriceListForm;
