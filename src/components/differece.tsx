import React from "react";

export function Difference() {
  return (
    <div className="bg-background py-12 md:py-24">
      <div>
        <h1 className="text-4xl font-bold text-[#01554E]">How we are different</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mr-4">
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
              <div className="flex items-center">
                <feature.Icon className="h-6 w-6 mr-2" />
                <h3 className="mt-0 text-lg font-semibold">{feature.title}</h3>
              </div>
            </div>
            <p className="mt-2 text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const features = [
  {
    title: "Responsive Design",
    description:
      "Crafted to adapt seamlessly across all devices, ensuring a consistent and delightful user experience.",
    Icon: LaptopIcon,
  },
  {
    title: "Customizable",
    description:
      "Easily tailor the design to match your brand and preferences, ensuring a seamless integration.",
    Icon: MoveHorizontalIcon,
  },
  {
    title: "Blazing Fast",
    description:
      "Optimized for lightning-fast performance, ensuring your users enjoy a seamless and efficient experience.",
    Icon: RocketIcon,
  },
  {
    title: "Accessibility",
    description:
      "Designed with accessibility in mind, ensuring your content is inclusive and user-friendly for all.",
    Icon: AccessibilityIcon,
  },
  {
    title: "Enterprise-ready",
    description:
      "Built to scale and support the needs of large organizations, ensuring a reliable and secure solution.",
    Icon: BriefcaseIcon,
  }, {
    title: "Enterprise-ready",
    description:
      "Built to scale and support the needs of large organizations, ensuring a reliable and secure solution.",
    Icon: BriefcaseIcon,
  }, {
    title: "Enterprise-ready",
    description:
      "Built to scale and support the needs of large organizations, ensuring a reliable and secure solution.",
    Icon: BriefcaseIcon,
  }, {
    title: "Enterprise-ready",
    description:
      "Built to scale and support the needs of large organizations, ensuring a reliable and secure solution.",
    Icon: BriefcaseIcon,
  },
  // Add more features as needed
];

type IconProps = React.SVGProps<SVGSVGElement>;

function AccessibilityIcon(props: IconProps) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function BriefcaseIcon(props: IconProps) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function LaptopIcon(props: IconProps) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  );
}

function MoveHorizontalIcon(props: IconProps) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function RocketIcon(props: IconProps) {
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
}
