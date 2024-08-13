import React from "react";

export function OurValues() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container grid grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-6 lg:gap-8">
        <ValueCard
          icon={<InfinityIcon className="h-8 w-8" />}
          title="Integrity"
          bgColor="bg-primary"
          textColor="text-primary-foreground"
        />
        <ValueCard
          icon={<RatioIcon className="h-8 w-8" />}
          title="Reliability"
          bgColor="bg-secondary"
          textColor="text-secondary-foreground"
        />
        <ValueCard
          icon={<CheckIcon className="h-8 w-8" />}
          title="Accountability"
          bgColor="bg-accent"
          textColor="text-accent-foreground"
        />
        <ValueCard
          icon={<CombineIcon className="h-8 w-8" />}
          title="Collaboration"
          bgColor="bg-success"
          textColor="text-success-foreground"
        />
        <ValueCard
          icon={<StoreIcon className="h-8 w-8" />}
          title="Customer-Centric"
          bgColor="bg-warning"
          textColor="text-warning-foreground"
        />
        <ValueCard
          icon={<RecycleIcon className="h-8 w-8" />}
          title="Sustainability"
          bgColor="bg-error"
          textColor="text-error-foreground"
        />
        <ValueCard
          icon={<InfoIcon className="h-8 w-8" />}
          title="Innovation"
          bgColor="bg-info"
          textColor="text-info-foreground"
        />
        <ValueCard
          icon={<AccessibilityIcon className="h-8 w-8" />}
          title="Adaptability"
          bgColor="bg-neutral"
          textColor="text-neutral-foreground"
        />
      </div>
    </section>
  );
}

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  bgColor: string;
  textColor: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, bgColor, textColor }) => (
  <div className="group flex flex-col items-center justify-center rounded-lg bg-muted p-6 transition-all hover:bg-muted-foreground hover:text-muted-background">
    <div className={`flex h-16 w-16 items-center justify-center rounded-full ${bgColor} ${textColor} group-hover:bg-primary-foreground group-hover:text-primary`}>
      {icon}
    </div>
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
  </div>
);

function AccessibilityIcon(props: React.SVGProps<SVGSVGElement>) {
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

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CombineIcon(props: React.SVGProps<SVGSVGElement>) {
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
}

function InfinityIcon(props: React.SVGProps<SVGSVGElement>) {
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
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function RatioIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="12" height="20" x="6" y="2" rx="2" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function RecycleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.994 3a1.83 1.83 0 0 1 1.57.881l4.686 8.118" />
      <path d="m14.647 8.207 4.096 1.098 1.098-4.097" />
    </svg>
  );
}

function StoreIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 2v2" />
      <path d="M19 2v2" />
      <rect width="20" height="4" x="2" y="6" rx="2" />
      <path d="M3 10v7a5 5 0 0 0 5 5v-4" />
      <path d="M16 21v-4a5 5 0 0 0 5-5v-7" />
      <path d="M4 16h5" />
      <path d="M16 16h5" />
    </svg>
  );
}
