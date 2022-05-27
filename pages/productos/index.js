import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Main, Container, H3 } from "../../styles/Common";
import Link from "../../components/Link";

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

const Productos = () => {
  return (
    <Main>
      <Container>
        <H3>PRODUCTOS</H3>
        <Products>
          <ProductWrapper>
            <Link href="/productos/publicitarios">
              <ProductImage
                alt="img"
                src="https://picsum.photos/id/1049/230/230"
                width="230"
                height="230"
              />
            </Link>
            <p>Publicitarios</p>
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
            <p>Recreativos</p>
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
            <p>Baby Gym</p>
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
            <p>Puff</p>
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
            <p>Camas elasticas</p>
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

export default Productos;
