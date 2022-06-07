import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Main, Container } from "../../../../styles/Common";
import Link from "../../../../components/Link";
import ImagesGallery from "../../../../components/ProductPage/ImagesGallery";
``;

const Title = tw.h2`
  text-lg
 
  md:text-xl 
  lg:text-2xl 
`;
const SubProductPage = () => {
  return (
    <Main>
      <Container>
        <div className="flex flex-col lg:flex-row  w-full md:w-[650px] lg:w-[960px]  mx-auto overflow-hidden">
          <div className="flex-shrink-0 flex items-center lg:mx-5 justify-center w-full lg:w-[520px] lg:max-h-full overflow-hidden bg-gray-300">
            <ImagesGallery />
          </div>
          <div className="flex flex-col items-center md:px-5 py-5 w-full">
            <div>
              <Title>Toldo 3x3</Title>
              <p className="py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis fugiat minus molestiae ipsam pariatur reprehenderit,
                delectus voluptas natus quibusdam illum vero repudiandae, quae,
                iure id non numquam possimus quisquam. Ipsum.
              </p>
              <div className="py-4">
                <div className="w-full border-t border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default SubProductPage;
