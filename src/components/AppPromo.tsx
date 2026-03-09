import Image from "next/image";
import { CONTACT_INFO } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function AppPromo() {
  return (
    <section className="bg-white py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get $5 Off Your First Service"
          subtitle="Download Our App"
          scriptText="special offer"
        />

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Download the App", desc: "Available on App Store and Google Play" },
              { step: "02", title: "Book Your Session", desc: "Schedule your appointment easily" },
              { step: "03", title: "Enjoy $5 OFF", desc: "Your discount is applied automatically" },
            ].map(({ step, title, desc }) => (
              <div key={step} className="group text-center">
                <div className="relative mx-auto mb-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent-pink/10 transition-all duration-500 group-hover:bg-accent-pink/20">
                    <span className="text-2xl font-bold text-accent-pink">{step}</span>
                  </div>
                </div>
                <p className="font-heading text-sm font-bold text-text-primary">{title}</p>
                <p className="mt-2 text-sm italic text-text-muted">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={CONTACT_INFO.appLinks.ios} target="_blank" rel="noopener noreferrer">
              <Image src="/images/appstore/app-store.png" alt="Download on App Store" width={180} height={60} className="h-14 w-auto" />
            </a>
            <a href={CONTACT_INFO.appLinks.android} target="_blank" rel="noopener noreferrer">
              <Image src="/images/appstore/google-play.png" alt="Get it on Google Play" width={180} height={60} className="h-14 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
