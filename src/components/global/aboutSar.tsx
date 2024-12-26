export default function AboutSarv() {
  const data = [
    {
      id: 1,
      title: "Our Entrepreneurial Journey",
      description:
        "We initiated our entrepreneurial journey as 'Shiv Shakti Traders' more than a decade ago, operating as a proprietorship firm. We began by engaging with various products and categories within the traditional offline supply chain model."
    },
    {
      id: 2,
      title: "Understanding Real-world Challenges",
      description:
        "Over time, we gained a deep understanding of the common practices and challenges encountered by businesses in the real world. This knowledge became the cornerstone of our mission."
    },
    {
      id: 3,
      title: "Diverse Business Connections",
      description:
        "Our journey led us to establish connections with a diverse range of businesses. From small-scale industries and MSMEs to farmers, artisans, societies, self-help groups (SHGs), and local unorganized businesses, we developed relationships that continue to shape our mission."
    },
    {
      id: 4,
      title: "Futuristic Insights",
      description:
        "At Sarvmatre, we are on a mission to enable and empower businesses rather than disrupting them, Sarvmatre intends to adopt a sector-agnostic approach to expansion within India and globally."
    },
    {
      id: 5,
      title: "Aligned with Government Initiatives",
      description:
        "We are proud to align ourselves with the government's vision of boosting local businesses, 'Vocal for Local' and 'Make in India.'"
    },
    {
      id: 6,
      title: "Comprehensive Solutions & Leveraging Technology",
      description:
        "Our platform offers end-to-end solutions to meet diverse business needs and scalability requirements. We cover everything from sourcing to selling, logistics, financial services, and legal assistance. We harness the power of technology to provide intelligent and efficient decision-making tools and solutions to our clients. Our company aims to provide access to a platform harnessing the power of technology, providing intelligent and efficient decision-making."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-8">
          <p className="text-sm text-muted-foreground">What we do</p>
          <h1 className="text-3xl md:text-5xl font-serif max-w-4xl">
            The word that unites and defines us is{" "}
            <span className="italic">curiosity</span>. It drives us to
          </h1>
        </div>

        {/* Data Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {data.map((item) => (
            <div key={item.id} className="space-y-4 relative">
              <div className="w-2 h-2 bg-black rounded-full" />
              <div className="hidden md:block absolute -top-3.5 border-t border-black border-[1px] w-[90%] right-0" />
              <h2 className="text-2xl md:text-3xl font-serif italic font-bold">
                {item.title}
              </h2>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}
