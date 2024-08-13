import Link from "next/link";

export function ContactMap() {
  return (
    <section className="w-full pb-8">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="aspect-video overflow-hidden rounded-xl">
          {/* <AreachartChart className="w-full h-full" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.66041711404!2d77.57685526461793!3d12.92923301188116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15986765d7d9%3A0xbba2fea7014e5087!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1723535761232!5m2!1sen!2sin"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Find Us
            </h2>
            <div className="text-muted-foreground">
              <p>Sarvmatre International Private Limited Jain Niwas,<br />Tali Morh, Near Doordarshan Kendra, Old Janipur,</p>
              <p>info@example.com</p>
              <p>+1 (555) 555-5555</p>
            </div>
          </div>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
