import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "../../components/Link";

const HeroCarousel = () => {
  return (
    <>
      <div className="md:hidden">
        <Carousel showThumbs={false}>
          <div className="h-screen mt-16 ">
            <img
              alt="1"
              src="https://www.asus.com/WebsitesBanner/global/banners/kkq25whkid9wgvfa/kkq25whkid9wgvfa-0_0_mobile_1X.jpg?webp"
              width="730"
              height="584"
              className="object-cover h-full"
            />
          </div>
          <div className="h-screen mt-16">
            <img
              alt="1"
              src="https://picsum.photos/730/548"
              width="730"
              height="584"
              className="object-cover h-full"
            />
          </div>
          <div className="h-screen mt-16">
            <img
              alt="1"
              src="https://picsum.photos/730/548"
              width="730"
              height="584"
              className="object-cover h-full"
            />
          </div>
        </Carousel>
      </div>

      <div className="hidden md:inline-flex mt-16">
        <Carousel showThumbs={false}>
          <div className="h-screen">
            <img
              alt="1"
              src="https://www.asus.com/WebsitesBanner/global/banners/kkq25whkid9wgvfa/kkq25whkid9wgvfa-0_0_desktop_1X.jpg?webp"
              width="1351"
              height="777"
              className="object-cover h-full"
            />
          </div>
          <div className="h-screen">
            <img
              alt="1"
              src="https://www.asus.com/WebsitesBanner/global/banners/zmfyszjhwnvo6dbd/zmfyszjhwnvo6dbd-0_0_desktop_1X.jpg"
              width="1330"
              height="600"
              className="object-cover h-full"
            />
          </div>
          <div className="h-screen">
            <img
              alt="1"
              src="https://www.asus.com/WebsitesBanner/global/banners/ygodzrdxgmqomrir/ygodzrdxgmqomrir-0_0_desktop_1X.jpg"
              width="1330"
              height="600"
              className="object-cover h-full"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default HeroCarousel;
