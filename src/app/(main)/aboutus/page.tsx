import { OurValues } from "@/components/our-values";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="h-[90svh] flex flex-col container gap-8 md:gap-16 justify-center overflow-hidden uppercase px-4 md:px-8">
        <div className="text-right text-5xl md:text-6xl lg:text-8xl font-black">
          <h1>
            Service with <br />
            accelerated <br />
            growth
          </h1>
        </div>
        <div className="text-left">
          <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[50%] text-lg md:text-2xl uppercase">
            <h1>
              Our{" "}
              <span className="font-black text-green-950">
                &apos;Mission&apos;{" "}
              </span>{" "}
              is to empower businesses to thrive by providing innovative
              solutions and unwavering support. Our sector-agnostic approach
              caters to businesses of all sizes. We strongly endorse, support,
              and are committed to-&apos;Vocal for Local&apos;. Our platform
              enables businesses to connect seamlessly with suppliers and
              customers across the country and in international markets.
            </h1>
          </div>
        </div>
        <hr className="border-black" />
      </div>
      <div className="py-8 md:py-16 px-4 md:px-8">
        <div className="bg-gray-200 container rounded-xl py-8 md:py-16">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Our Values
          </h1>
          <OurValues />
        </div>
      </div>
    </>
  );
};

export default Page;
