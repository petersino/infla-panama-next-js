import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Image from "next/image";
import { Main, Container } from "../styles/Common";
import Link from "../components/Link";
import { Icon } from "@iconify/react";
import Button from "../components/Button";

const MarginTop = tw.div`
  mt-24
`;

const contacto = () => {
  return (
    <Main>
      <Container>
        <section className="overflow-hidden ">
          <div className="container">
            <div className="flex flex-wrap my-10 lg:justify-between">
              <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                <div className="max-w-[570px] mb-12 lg:mb-0">
                  <h2
                    className="
                 text-dark
                 mb-6
                 uppercase
                 font-bold
                 text-[22px]
                 sm:text-[27px]
                 lg:text-[27px]
                 "
                  >
                    Contáctanos
                  </h2>
                  <p className="text-base leading-relaxed text-body-color mb-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eius tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim adiqua minim veniam quis nostrud exercitation
                    ullamco
                  </p>
                  <div className="flex mb-8 max-w-[370px] w-full">
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark">
                        Our Location
                      </h4>
                      <p className="text-base text-body-color">
                        99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 max-w-[370px] w-full">
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark">
                        Phone Number
                      </h4>
                      <p className="text-base text-body-color">
                        (+62)81 414 257 9980
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-8 max-w-[370px] w-full">
                    <div className="w-full">
                      <h4 className="mb-1 text-xl font-bold text-dark">
                        Email Address
                      </h4>
                      <p className="text-base text-body-color">
                        info@yourdomain.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                <div className="relative p-8 bg-gray-300 rounded-lg shadow-lg sm:p-12">
                  <form>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="
                       w-full
                       rounded
                       py-3
                       px-[14px]
                       text-body-color text-base
                       border border-[f0f0f0]
                       outline-none
                       focus-visible:shadow-none
                       focus:border-primary
                       "
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="
                       w-full
                       rounded
                       py-3
                       px-[14px]
                       text-body-color text-base
                       border border-[f0f0f0]
                       outline-none
                       focus-visible:shadow-none
                       focus:border-primary
                       "
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Your Phone"
                        className="
                       w-full
                       rounded
                       py-3
                       px-[14px]
                       text-body-color text-base
                       border border-[f0f0f0]
                       outline-none
                       focus-visible:shadow-none
                       focus:border-primary
                       "
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows="6"
                        placeholder="Your Message"
                        className="
                       w-full
                       rounded
                       py-3
                       px-[14px]
                       text-body-color text-base
                       border border-[f0f0f0]
                       resize-none
                       outline-none
                       focus-visible:shadow-none
                       focus:border-primary
                       "
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full p-3 text-white transition border rounded bg-primary border-primary hover:bg-opacity-90"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963.2825995590833!2d-68.01401472072129!3d10.215920099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d97458a2f41%3A0x60f60435f86f6c53!2sInflables%20Carcajadas!5e0!3m2!1ses!2sve!4v1655060198241!5m2!1ses!2sve"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </Container>
    </Main>
  );
};

export default contacto;
