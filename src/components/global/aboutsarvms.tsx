import { Card } from "../ui/card";

const AboutSarv = () => {
  return (
    <>
      <section className="">
        <div className="container ">
          <div className="flex ">
            <div className="w-[20%]">
              <h2>About Sarvmatre</h2>
            </div>
            <div className="flex gap-5   items-center flex-row">
<div className=" border-t-[2px]  border-[#afafaf]  gap-2 relative">
    <div className="py-2 flex flex-col gap-5 ">
      <div className="min-h-[20px] min-w-[20px]  max-w-[20px] max-h-[20px] bg-black rounded-[50%] absolute -top-2.5 z-10"></div>
      <div>
        {/* <h1 className="text-5xl font-extrabold">01</h1> */}
      </div>
      <h1 className="text-3xl font-bold">Our Entrepreneurial Journey</h1>
    </div>
    <div>
      <p>
We initiated our entrepreneurial journey as &quote;Shiv Shakti Traders&quote; more than a decade ago, operating as a proprietorship firm. We began by engaging with various products and categories within the traditional offline supply chain model.
</p>
    </div>
</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSarv;
