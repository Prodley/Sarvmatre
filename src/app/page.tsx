import { Aboutsec } from "@/components/aboutsec";
import { Difference } from "@/components/differece";
import Marquee from "@/components/magicui/marquee";
import { MarqueeDemo } from "@/components/marq";
import { Offers } from "@/components/offers";
import { Ourvalues } from "@/components/ourvalues";
import { Problems } from "@/components/problems";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="pt-12">
        {/* <HeroHighlight className="!py-32"> */}
        <div className="h-[80svh] flex flex-col justify-center items-center">
          {/* <HeroHighlight > */}
          <div className="container">
            <div className="flex flex-col ">
              <div className="flex justify-start sm:justify-end">
                <p className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl  text-[#01554E] text-primary font-bold">
                  # BUILDING INDIA&apos;S
                </p>
              </div>
              <div className=" flex ">
                <div>
                  <div className="w-[60%] text-[#E2F1F0 ] text-xl font-mono xl:flex hidden">
                    {" "}
                    At Sarvmatre International, we provide innovative solutions
                    and unwavering support to businesses of all sizes and
                    sectors. Moreover, our platform connects businesses with
                    suppliers and customers both nationally and international,
                    providing access to a wider range of suppliers and
                    customers.
                  </div>
                </div>
                <div className=" flex justify-end items-center">
                  <p className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#01554E]  text-primary font-bold">
                    GLOBAL
                  </p>
                </div>
              </div>
              <div className=" flex justify-start sm:justify-end">
                <p className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-[#01554E] text-primary font-bold">
                  MARKETPLACE
                </p>
              </div>
              {/* WIP -- Color  */}
              <div className="w-full text-lg text-[#E2F1F0 ] font-mono flex xl:hidden ">
                {" "}
                At Sarvmatre International, we provide innovative solutions and
                unwavering support to businesses of all sizes and sectors.
                Moreover, our platform connects businesses with suppliers and
                customers both nationally and international, providing access to
                a wider range of suppliers and customers.
              </div>
            </div>
          </div>
          {/* </HeroHighlight> */}
        </div>
        {/* <Image
          src={'/indiamap.png'}
          width={200}
          height={200}
          alt="Company logo"
        /> */}
        {/* </HeroHighlight> */}
        <div className="container">
          <Aboutsec />
        </div>
        <div className="container ">
          <Ourvalues />
        </div>
        <div>
          <div className="container">
            <h1 className="text-center font-bold  lg:text-[128px] md:text-[96px] sm:text-[72px] text-[48px] lg:leading-[1.1] md:leading-[1.2] sm:leading-[1.3] leading-[1.4]">
              Service with accelerated growth
            </h1>

            <MarqueeDemo />
          </div>
        </div>
        <div className="py-16 container">
          <Image
            src={"/prodframe.png"}
            width={1800}
            height={1800}
            alt="Prodleylogo"
            className="object-contain object-center w-full h-auto"
          />
        </div>
        <div className="bg-[#1a1a1a] py-16">
          <div className="container ">
            <Offers />
          </div>
        </div>

        <div className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
              Reason to Choose Us
            </h1>
            <div className="flex justify-center items-center mt-8">
              <Image
                src={"/expandtree.webp"}
                width={1500}
                height={1500}
                alt="Company logo"
                className="object-contain object-center w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="bg-blac">
        <div className="container">
          <Problems/>
        </div>
        </div>
        <div className="container">
          <Difference/>
        </div>
      </section>
    </>
  );
}
