import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Main, Container, H3 } from "../../../../styles/Common";
import Link from "../../../../components/Link";

const Products = styled.div`
  width 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
`;

const ProductWrapper = tw.div`  
  flex 
  flex-col 
  items-center
  pb-5
`;

const ProductImage = tw(Image)`
  bg-gray-300 
  rounded-md 
  object-cover 
  w-full
`;

const SubcategoriesPage = () => {
  return (
    <Main>
      <Container>
        <H3>Toldos</H3>
        <Products>
          <ProductWrapper>
            <Link href="/productos/publicitarios/toldos/toldo-3x3">
              <ProductImage
                alt="img"
                src="https://picsum.photos/id/1049/230/230"
                width="230"
                height="230"
              />
            </Link>
            <p>Toldo 3x3</p>
          </ProductWrapper>
          <ProductWrapper>
            <Link href="/productos/recreativos">
              <ProductImage
                alt="img"
                src="https://picsum.photos/id/1049/230/230"
                width="230"
                height="230"
              />
            </Link>
            <p>Toldo 4x4</p>
          </ProductWrapper>
          <ProductWrapper>
            <Link href="/productos/recreativos">
              <ProductImage
                alt="img"
                src="https://picsum.photos/id/1049/230/230"
                width="230"
                height="230"
              />
            </Link>
            <p>Toldo 5x5</p>
          </ProductWrapper>

          <ProductWrapper>
            <Link href="http://www.instagram.com">
              <ProductImage
                alt="img"
                src="https://picsum.photos/id/1049/230/230"
                width="230"
                height="230"
              />
            </Link>
            <p>Toldo especial</p>
          </ProductWrapper>
        </Products>
      </Container>
    </Main>
  );
};

export default SubcategoriesPage;
