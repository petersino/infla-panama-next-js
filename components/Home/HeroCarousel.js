import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "../../components/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroCarousel = () => {
  return (
    <>
      <div className="hidden md:inline lg:hidden">
        <Carousel>
          <div style={{ height: "630px", position: "relative" }} className="">
            <Image
              alt="1"
              src="/images/ejemplo2_tablet_2X.jpg"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div style={{ height: "630px", position: "relative" }} className="">
            <Image
              alt="1"
              src="/images/ejemplo2_tablet_2X.jpg"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </Carousel>
      </div>

      <div className="hidden md:inline lg:hidden">
        <Swiper
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide
            style={{ height: "630px", position: "relative" }}
            className=""
          >
            <Image
              alt="1"
              src="/images/ejemplo2_tablet_2X.jpg"
              objectFit="cover"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="md:hidden">
        <Swiper
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide
            style={{ height: "600px", position: "relative" }}
            className=""
          >
            <Image
              alt="1"
              src="/images/ejemplo2_mobile_2X.jpg"
              objectFit="cover"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "600px", position: "relative" }}
            className=""
          >
            <Image
              alt="1"
              src="/images/ejemplo2_mobile_2X.jpg"
              objectFit="cover"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="hidden lg:inline">
        <Swiper
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide
            style={{
              height: "650px",
              position: "relative" /* height: "100vh" */,
            }}
          >
            <Image
              alt="1"
              src="/images/ejemplo2_desktop_2X.jpg"
              objectFit="cover"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide style={{ height: "650px" /* height: "100vh" */ }}>
            <Image
              alt="1"
              src="/images/ejemplo2_desktop_2X.jpg"
              objectFit="cover"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroCarousel;
