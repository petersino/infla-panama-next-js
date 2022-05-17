import React from "react";
import tw from "twin.macro";
import { Container, H3 } from "../../styles/Container";

const ProductsContainer = tw.div`  
  flex
  justify-center
  flex-wrap
  overflow-hidden
  gap-8
  
  
`;

const ProductContainer = tw.div`  
overflow-hidden

 /*  w-1/2 
  md:w-1/4  
  xl:w-1/4 */
`;

const TextsContainer = tw.div`
  w-full 
  p-2
`;

const H2 = tw.h2`   
  font-semibold 
  truncate 
  mb-1 
  md:mb-1.5 
  text-sm 
`;

const P = tw.p`   

  text-xs 
  lg:text-sm 
  leading-normal 
  xl:leading-relaxed 
  max-w-[250px] 
  truncate

`;

const TopProducts = () => {
  return (
    <Container>
      <H3>PRODUCTOS DESTACADOS</H3>
      <ProductsContainer>
        <ProductContainer>
          <img
            alt="Men's Collection"
            src="https://loremflickr.com/230/230"
            decoding="async"
            className="bg-gray-300 rounded-md object-cover w-full"
          />
          <TextsContainer>
            <H2>Top Product</H2>
            <P>Top Product Description</P>
          </TextsContainer>
        </ProductContainer>
        <ProductContainer>
          <img
            alt="Men's Collection"
            src="https://loremflickr.com/230/230"
            decoding="async"
            className="bg-gray-300 rounded-md object-cover w-full"
          />
          <TextsContainer>
            <H2>Top Product</H2>
            <P>Top Product Description</P>
          </TextsContainer>
        </ProductContainer>
        <ProductContainer>
          <img
            alt="Men's Collection"
            src="https://loremflickr.com/230/230"
            decoding="async"
            className="bg-gray-300 rounded-md object-cover w-full"
          />
          <TextsContainer>
            <H2>Top Product</H2>
            <P>Top Product Description</P>
          </TextsContainer>
        </ProductContainer>
        <ProductContainer>
          <img
            alt="Men's Collection"
            src="https://loremflickr.com/230/230"
            decoding="async"
            className="bg-gray-300 rounded-md object-cover w-full"
          />
          <TextsContainer>
            <H2>Top Product</H2>
            <P>Top Product Description</P>
          </TextsContainer>
        </ProductContainer>
        <ProductContainer>
          <img
            alt="Men's Collection"
            src="https://loremflickr.com/230/230"
            decoding="async"
            className="bg-gray-300 rounded-md object-cover w-full"
          />
          <TextsContainer>
            <H2>Top Product</H2>
            <P>Top Product Description</P>
          </TextsContainer>
        </ProductContainer>
        <ProductContainer>
          <img
            alt="Men's Collection"
            src="https://loremflickr.com/230/230"
            decoding="async"
            className="bg-gray-300 rounded-md object-cover w-full"
          />
          <TextsContainer>
            <H2>Top Product</H2>
            <P>Top Product Description</P>
          </TextsContainer>
        </ProductContainer>
        <ProductContainer>
          <img
            alt="Men's Collection"
            src="https://loremflickr.com/230/230"
            decoding="async"
            className="bg-gray-300 rounded-md object-cover w-full"
          />
          <TextsContainer>
            <H2>Top Product</H2>
            <P>Top Product Description</P>
          </TextsContainer>
        </ProductContainer>
        <ProductContainer>
          <img
            alt="Men's Collection"
            src="https://loremflickr.com/230/230"
            decoding="async"
            className="bg-gray-300 rounded-md object-cover w-full"
          />
          <TextsContainer>
            <H2>Top Product</H2>
            <P>Top Product Description</P>
          </TextsContainer>
        </ProductContainer>
      </ProductsContainer>
    </Container>
  );
};

export default TopProducts;
