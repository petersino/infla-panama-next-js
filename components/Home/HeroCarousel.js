import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "../../components/Link";

const HeroCarousel = () => {
  return (
    <>
      <div>
        <Carousel showThumbs={false}>
          <div className="h-screen mt-16 ">
            <img
              alt="1"
              src="https://asus.com/WebsitesBanner/global/banners/vm5yq7mmayfnenyd/vm5yq7mmayfnenyd-0_0_mobile_1X.jpg"
              width="730"
              height="584"
              className="object-cover h-full"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <Image
              alt="1"
              src="https://picsum.photos/730/548"
              width="730"
              height="584"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <Image
              alt="1"
              src="https://picsum.photos/730/548" /* hola https://asus.com/WebsitesBanner/global/banners/vm5yq7mmayfnenyd/vm5yq7mmayfnenyd-0_0_mobile_1X.jpg */
              width="730"
              height="584"
            />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>

      <div className=" mt-16 w-full">
        <Carousel showThumbs={false}>
          <div>
            <Image
              alt="1"
              src="https://loremflickr.com/1330/600"
              width="1330"
              height="600"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <Image
              alt="1"
              layout="fill"
              src="https://loremflickr.com/1330/600"
              width="1330"
              height="600"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <Image
              alt="1"
              layout="fill"
              src="https://loremflickr.com/1330/600"
              width="1333"
              height="600"
            />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <p> hola</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HeroCarousel;
