import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Main, Container, H3 } from "../../../styles/Common";
import Link from "../../../components/Link";

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

const ProductListOrSubCategory = () => {
  return (
    <Main>
      <Container>
        <H3>Publicitarios</H3>
        <Products>
          <ProductWrapper>
            <Link href="/productos/publicitarios/toldos">
              <ProductImage
                alt="img"
                src="https://picsum.photos/id/1049/230/230"
                width="230"
                height="230"
              />
            </Link>
            <p>Toldos</p>
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
            <p>Replicas</p>
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
            <p>Arcos de meta</p>
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
            <p>Ciclon de la suerte</p>
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
            <p>Sky dancers</p>
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
            <p>Maquinas e insumos</p>
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
            <p>Maquinas e insumos</p>
          </ProductWrapper>
        </Products>
      </Container>
    </Main>
  );
};

export default ProductListOrSubCategory;
