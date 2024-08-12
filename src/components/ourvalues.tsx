import { FC, SVGProps } from "react";
import { Card } from "@/components/ui/card";

export const Ourvalues: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our values</h1>
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-6">
        <Card className="p-6 rounded-lg shadow-lg border border-input hover:bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-primary rounded-md p-3 flex items-center justify-center">
              <RocketIcon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Innovation</h3>
          </div>
          <p className="text-muted-foreground mt-4">
            We are committed to pushing the boundaries of what&apos;s possible, constantly innovating to deliver the best
            solutions for our clients.
          </p>
        </Card>
        <Card className="p-6 rounded-lg shadow-lg border border-input hover:bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-secondary rounded-md p-3 flex items-center justify-center">
              <InfinityIcon className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Integrity</h3>
          </div>
          <p className="text-muted-foreground mt-4">
            We operate with the highest standards of ethics and transparency, always putting the needs of our clients
            first.
          </p>
        </Card>
        <Card className="p-6 rounded-lg shadow-lg border border-input hover:bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-md p-3 flex items-center justify-center">
              <CombineIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Collaboration</h3>
          </div>
          <p className="text-muted-foreground mt-4">
            We believe in the power of teamwork, working closely with our clients to achieve their goals and deliver
            exceptional results.
          </p>
        </Card>
        <Card className="p-6 rounded-lg shadow-lg border border-input hover:bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-card rounded-md p-3 flex items-center justify-center">
              <AwardIcon className="w-6 h-6 text-card-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Excellence</h3>
          </div>
          <p className="text-muted-foreground mt-4">
            We strive for excellence in everything we do, continuously improving our skills and delivering the highest
            quality work.
          </p>
        </Card>
      </div>
    </section>
  );
};

const AwardIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
};

const CombineIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
};

const InfinityIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  );
};

const RocketIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
};

export default Ourvalues;
