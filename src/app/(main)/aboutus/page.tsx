import AboutSarv from "@/components/global/aboutSar";
import { OurValues } from "@/components/our-values";
import React from "react";
import Image from "next/image";
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
      <AboutSarv />
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch min-h-[400px]">
          {/* First column: Top-aligned text */}
          <div className="flex flex-col justify-start">
            <h2 className="text-6xl font-bold mb-4">Meet Our Founders</h2>
            {/* <p className="text-gray-600">
            This is some text content that is aligned to the top of the column.
            It demonstrates how we can position elements at the start of a flex container.
          </p> */}
          </div>

          {/* Second column: Centered rounded photo */}
          <div className="flex items-center justify-center">
            <div className="">
              <Image
                src="/directorimage.png"
                alt="director photo"
                width={250}
                height={300}
                className="object-cover   rounded-full overflow-hidden flex justify-center"
              />
            </div>
          </div>

          {/* Third column: Bottom-aligned paragraphs */}
          <div className="flex flex-col justify-end">
            <h2 className="text-6xl font-bold mb-4">Sorabh Jain</h2>
            <h1 className="text-2xl font-bold">
              Founder and Directors 
            </h1>
            <p className="text-gray-600 mb-4">
              B.E, PGD 14+ years of experience
              in Business Operations, Project Management, Sales & Marketing,
              Brand Building, Leadership and People Management
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
