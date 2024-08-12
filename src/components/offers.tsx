import React from 'react';

export function Offers() {
  return (
    <div className="bg-[#1a1a1a] text-white p-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          So, <span className="text-gray-400">why work</span>
          <br />
          with DesignThat?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <OfferCard 
          title="Speed" 
          description="Receive your designs ASAP without compromising quality. Our model doesn't require long meetings and dozens of emails, which gives us the ability to focus 98% of the time doing the actual work."
          Icon={RocketIcon}
        />
        <OfferCard 
          title="Transparency" 
          description="Say bye-bye to budget uncertainties with our transparent and fixed pricing model. You're free to pause or cancel anytime."
          Icon={LayersIcon}
        />
        <OfferCard 
          title="Results" 
          description="Good design is the one that performs well and leaves a memorable mark on your audience. So, we combine both worlds - performance and beauty."
          Icon={TrophyIcon}
        />
        <OfferCard 
          title="Engagement" 
          description="Even though we work asynchronously, we will update you daily on Slack (if you don't mind) and do calls and looms, when needed."
          Icon={HeadphonesIcon}
        />
        <OfferCard 
          title="Flexibility" 
          description="Once signed up, you'll get your own easy-to-manage Trello board, where you can add and oversee all of your requests. No user limit, add as many people as you need."
          Icon={TrelloIcon}
        />
        <OfferCard 
          title="Scalability" 
          description="Whether you're one-person business or a large company, our subscription plans scale with your needs."
          Icon={ExpandIcon}
        />
      </div>
    </div>
  )
}

interface OfferCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function OfferCard({ title, description, Icon }: OfferCardProps) {
  return (
    <div className="flex flex-col items-start bg-[#222222] rounded-lg p-6 hover:bg-[#2a2a2a] transition-colors duration-300">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Icon className="ml-2 w-6 h-6 text-white p-1 rounded-full" />
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function ExpandIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  )
}

function HeadphonesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}

function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
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
  )
}

function TrelloIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <rect width="3" height="9" x="7" y="7" />
      <rect width="3" height="5" x="14" y="7" />
    </svg>
  )
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.75a5.15 5.15 0 0 0 4 0M12 3a4 4 0 0 0-4 4v5a4 4 0 0 0 3 3.87v3.13h2v-3.13a4 4 0 0 0 3-3.87V7a4 4 0 0 0-4-4z" />
    </svg>
  )
}
