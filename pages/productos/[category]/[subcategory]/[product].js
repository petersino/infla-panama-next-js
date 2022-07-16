import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Main, Container } from "../../../../styles/Common";
import Link from "../../../../components/Link";
import ImagesGallery from "../../../../components/ProductPage/ImagesGallery";
import { Icon } from "@iconify/react";
import Button from "../../../../components/Button";

const ProductSection = tw.div`
  flex 
  flex-col 
  lg:flex-row  
  w-full 
  md:w-[650px] 
  lg:w-[960px]  
  mx-auto 
  overflow-hidden
`;

const GalleryWrapper = tw.div`
  flex-shrink-0 
  flex 
  items-center 
  lg:mx-5 
  justify-center 
  w-full 
  lg:w-[520px] 
  lg:max-h-full 
  overflow-hidden 
  
`;

const ProductInfo = tw.div`
  flex 
  flex-col 
  items-center 
  md:px-5 
  py-5 
  w-full
`;

const Title = tw.h2`
  text-lg 
  md:text-xl 
  lg:text-2xl 
`;

const Description = tw.p`
  py-3
  
  text-sm
  text-justify
`;

const Line = tw.div`
  w-full  
  border-t 
  border-gray-300
`;

const ProductPage = () => {
  return (
    <Main>
      <Container>
        <ProductSection>
          <GalleryWrapper>
            <ImagesGallery />
          </GalleryWrapper>
          <ProductInfo>
            <div className="md:pr-4">
              <Title>Toldo 3x3</Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis fugiat minus molestiae ipsam pariatur reprehenderit,
                delectus voluptas natus quibusdam illum vero repudiandae, quae,
                iure id non numquam possimus quisquam. Ipsum.
              </Description>
              <div className="py-4">
                <Line />
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Icon icon="radix-icons:dimensions" />
                  <p className="text-sm">
                    3 m de largo x 2 m de ancho x 2.80 m de altura
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="bxs:badge-check" color="#0fa958" />
                  <p className="text-sm">Motor soplador</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="bxs:badge-check" color="#0fa958" />
                  <p className="text-sm">Bolso de traslado</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="bxs:badge-check" color="#0fa958" />
                  <p className="text-sm">Cinta de amarre</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Icon icon="bxs:badge-check" color="#DBAB00" />
                  <p className="text-sm">Un año de garantia el inflable</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon icon="bxs:badge-check" color="#DBAB00" />
                  <p className="text-sm">Un año de garantia el soplador</p>
                </div>

                <p className="text-sm">Capacidad: de 4 a 5 niños</p>
                <div>
                  <Button
                    href={`https://api.whatsapp.com/send?phone=584144819560&text=%C2%A1Hola!%20Te%20escribo%20desde%20la%20p%C3%A1gina%20web.`}
                    color="green"
                    icon="logos:whatsapp"
                  >
                    Asesor de ventas
                  </Button>
                </div>
              </div>
            </div>
          </ProductInfo>
        </ProductSection>
      </Container>
    </Main>
  );
};

export default ProductPage;
