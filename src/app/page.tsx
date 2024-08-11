import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="pt-12">
      {/* <HeroHighlight className="!py-32"> */}
        <div className="container py-9">
          <div className="flex flex-col sm:justify-end items-start lg:items-end gap-3 sm:gap-5">
            <div>
              <h1 className="font-semibold sm:font-bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl  text-primary  uppercase">
                #Building india&apos;s
              </h1>
            </div>
            <div className="flex flex-row">
              <div className="w-[90%] lg:flex hidden">
                <p className="text-xl font-mono">
                  At Sarvmatre International, we provide innovative solutions
                  and unwavering support to businesses of all sizes and
                  sectors. Moreover, our platform connects businesses with
                  suppliers and customers both nationally and international,
                  providing access to a wider range of suppliers and
                  customers.
                </p>
              </div>
              <div className="w-full flex justify-end items-center">
                <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-primary uppercase">
                  Global
                </h1>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-primary uppercase">
                Marketplace
              </h1>
            </div>
            <div className="w-full flex lg:hidden">
              <p className="text-sm sm:text-xl font-mono">
                At Sarvmatre International, we provide innovative solutions
                and unwavering support to businesses of all sizes and sectors.
                Moreover, our platform connects businesses with suppliers and
                customers both nationally and international, providing access
                to a wider range of suppliers and customers.
              </p>
            </div>
          </div>
        </div>
      {/* </HeroHighlight> */}
    </section>
  </>
  );
}
