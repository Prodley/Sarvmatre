import Image from "next/image";
import Link from "next/link";
import { FC, SVGProps } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-muted bg-[#4EA39C] pt-12 pb-16">
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            {/* <MountainIcon className="h-6 w-6" /> */}
            <Image
              src={"/logo.png"}
              width={200}
              height={200}
              alt="Company logo"
              className="object-contain object-center"
            />
          </Link>
          <p className="text-white">
            Sarvmatre International Private Limited Jain Niwas, <br /> Tali
            Morh, Near Doordarshan Kendra, Old Janipur, <br /> Jammu, J&K, India
            - 180007
            <br />
            corp@sarvmatre.com
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Company</h4>
            <nav className="grid gap-2 text-white">
              <Link
                href="#"
                className="text-sm   hover:underline"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm  hover:underline"
                prefetch={false}
              >
                Team
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Products</h4>
            <nav className="grid gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Integrations
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Enterprise
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Resources</h4>
            <nav className="grid gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Guides
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Support
              </Link>
            </nav>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Legal</h4>
            <nav className="grid gap-2">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Cookies
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:underline"
                prefetch={false}
              >
                Licenses
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="container mt-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <FacebookIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; 2024 Sarvmatre All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
};

const InstagramIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

const LinkedinIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
};

const MountainIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
};

const TwitterIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
};
