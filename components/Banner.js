import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Image from "next/image";
import Link from "./Link";

const BannerImage = tw(Image)`
  bg-gray-300 
  rounded-md 
  object-cover 
  w-full
`;

const Banner = () => {
  return (
    <div>
      <Link>
        <BannerImage
          alt="banner"
          src="https://loremflickr.com/1149/225"
          width="1149"
          height="225"
        ></BannerImage>
      </Link>
    </div>
  );
};

export default Banner;
