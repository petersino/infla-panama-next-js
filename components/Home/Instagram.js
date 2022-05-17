import React from "react";
import tw from "twin.macro";
import { Container, H3 } from "../../styles/Container";
import Image from "next/image";
import Link from "../../components/Link";

const InstaImages = tw.div`  
  flex
  justify-center
  flex-wrap
  overflow-hidden
  gap-8
  
`;

const IstaImage = tw(Image)`
  bg-gray-300 
  rounded-md 
  object-cover 
  w-full
`;

const Instagram = () => {
  return (
    <Container>
      <H3>INSTAGRAM @CARCAJADASVENEZUELA</H3>
      <InstaImages>
        <Link href="http://www.instagram.com">
          <IstaImage
            alt="img"
            src="https://loremflickr.com/230/230"
            width="230"
            height="230"
          />
        </Link>
        <Link href="http://www.instagram.com">
          <IstaImage
            alt="img"
            src="https://loremflickr.com/230/230"
            width="230"
            height="230"
          />
        </Link>
        <Link href="http://www.instagram.com">
          <IstaImage
            alt="img"
            src="https://loremflickr.com/230/230"
            width="230"
            height="230"
          />
        </Link>
        <Link href="http://www.instagram.com">
          <IstaImage
            alt="img"
            src="https://loremflickr.com/230/230"
            width="230"
            height="230"
          />
        </Link>
      </InstaImages>
    </Container>
  );
};

export default Instagram;
