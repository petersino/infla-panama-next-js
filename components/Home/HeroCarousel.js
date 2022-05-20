import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "../../components/Link";

const HeroCarousel = () => {
  return (
    <>
      <div className="md:hidden">
        <div style={{ height: "600px", position: "relative" }} className="">
          <Image
            alt="1"
            src="/images/ejemplo2_mobile_2X.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      <div className="hidden md:inline lg:hidden">
        <div style={{ height: "630px", position: "relative" }} className="">
          <Image
            alt="1"
            src="/images/ejemplo2_tablet_2X.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      <div className="hidden lg:inline">
        <div style={{ height: "650px", position: "relative" }} className="">
          <Image
            alt="1"
            src="/images/ejemplo2_desktop_2X.jpg"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      {/* <div className="md:hidden">
        <Carousel showThumbs={false} swipeScrollTolerance={50}>
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
              src="https://www.asus.com/WebsitesBanner/global/banners/zmfyszjhwnvo6dbd/zmfyszjhwnvo6dbd-0_0_mobile_2X.jpg"
              width="730"
              height="584"
              className="object-cover h-full"
            />
          </div>
          <div className="h-screen mt-16">
            <img
              alt="1"
              src="https://www.asus.com/WebsitesBanner/global/banners/zmfyszjhwnvo6dbd/zmfyszjhwnvo6dbd-0_0_mobile_1X.jpg"
              width="730"
              height="584"
              className="object-cover h-full"
            />
          </div>
        </Carousel>
      </div> */}

      {/* <div className="hidden mt-16 md:inline-flex">
        <Carousel showThumbs={false} swipeScrollTolerance={200}>
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
      </div> */}
    </>
  );
};

export default HeroCarousel;
