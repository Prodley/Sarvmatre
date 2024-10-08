
import Link from "next/link";
import Image from "next/image";

export function Aboutsec() {
  return (
    <section className="relative w-full overflow-hidden glass">
      <div className="container grid items-center gap-8 py-12 md:py-24 lg:py-32 xl:grid-cols-[1fr_550px]">
        <Image
          src="/tree.webp"
          width="400"
          height="400"
          alt="About"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
        />
        {/* <img
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="About"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
        /> */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover Our Story
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sarvmatre is an innovative B2B e-commerce platform connecting
              businesses with global suppliers & customers. We empower
              sustainable growth through technology tools & collaborative
              relationships.
            </p>
          </div>
          {/* WIP -- Color */}
          <Link
            href="#"
            className="  inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Know More
          </Link>
        </div>
      </div>
      {/* <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1200&width=1920")',
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
      /> */}
    </section>
  );
}
