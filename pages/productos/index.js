import React from "react";
import Head from "next/head";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Main, Container, H3 } from "../../styles/Common";
import Link from "../../components/Link";
import { fetchAPI, getCategories } from "../../utils/api";
import { getStrapiMedia } from "../../utils/media";

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

const Productos = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Produtos - Inflables Carcajadas</title>
        <meta
          name="description"
          content="Publicitarios inflables, inflables infatiles, camas elasticas, baby gym, maquinas de algodon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      \
      <Main>
        <Container>
          <H3>PRODUCTOS</H3>
          <Products>
            {categories.map(({ id, attributes }) => (
              <ProductWrapper key={id}>
                <Link href={`/productos/${attributes.slug}`}>
                  <ProductImage
                    alt="img"
                    src={getStrapiMedia(attributes.imagen.data.attributes.url)}
                    width="230"
                    height="230"
                  />
                </Link>
                <p>{attributes.nombre}</p>
              </ProductWrapper>
            ))}
          </Products>
        </Container>
      </Main>
    </>
  );
};

export async function getStaticProps() {
  const call = await getCategories();
  const categories = call.data;
  const metaData = call.meta;
  return { props: { categories, metaData } };
}

export default Productos;
