import Image from "next/image";

export function Problems() {
  return (
    <div className="flex min-h-screen bg-blac text-whit">
      <div className="flex flex-col items-center justify-center w-1/2 space-y-4">
        <div className="flex items-center justify-center w-64 h-64 rounded-full overflow-hidden">
          <Image
            src="/placeholder.svg"
            alt="Logo"
            className="rounded-full"
            width={256}
            height={256}
            style={{ aspectRatio: "256/256", objectFit: "cover" }}
          />
        </div>
        <p className="text-lg">Creativity meets technology</p>
      </div>
      <div className="flex flex-col justify-center w-1/2 space-y-8">
        <h2 className="text-4xl font-bold mb-4 text-[#01554E]">The Problem We Solve</h2>
        <div className="flex items-center space-x-4 border-b border-white pb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Discovery Icon"
              className="rounded-full"
              width={64}
              height={64}
              style={{ aspectRatio: "64/64", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#4EA39C]">Discovery</h2>
            <p>
              We create digital products using modern design techniques. The works we implement are easy to understand,
              aesthetic, interactive, and functional.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 border-b border-white pb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Direction Icon"
              className="rounded-full"
              width={64}
              height={64}
              style={{ aspectRatio: "64/64", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Direction</h2>
            <p>
              We face every challenge in agile project management. Using our experience and network, we provide the best
              results with efficient management.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 border-b border-white pb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Design Icon"
              className="rounded-full"
              width={64}
              height={64}
              style={{ aspectRatio: "64/64", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Design</h2>
            <p>
              We originate impressive design solutions that are authentic to your business environment. Your web presence
              will be impressive.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 border-b border-white pb-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full overflow-hidden">
            <Image
              src="/placeholder.svg"
              alt="Development Icon"
              className="rounded-full"
              width={64}
              height={64}
              style={{ aspectRatio: "64/64", objectFit: "cover" }}
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Development</h2>
            <p>
              We develop ideas from scratch using modern tools, achieving the highest results and flexible solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
