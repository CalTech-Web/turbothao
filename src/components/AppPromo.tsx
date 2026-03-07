import { Download, Smartphone, Gift } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function AppPromo() {
  return (
    <section className="bg-gradient-to-br from-deep-plum to-rose-gold py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get $5 Off Your First Service"
          subtitle="Download Our App"
          light
        />

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <Download className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg font-semibold text-white">
                1. Download the App
              </p>
              <p className="mt-1 text-sm text-white/70">
                Available on App Store and Google Play
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg font-semibold text-white">
                2. Book Your Session
              </p>
              <p className="mt-1 text-sm text-white/70">
                Schedule your appointment easily
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <p className="text-lg font-semibold text-white">
                3. Enjoy $5 OFF
              </p>
              <p className="mt-1 text-sm text-white/70">
                Your discount is applied automatically
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-deep-plum transition-all duration-300 hover:bg-champagne hover:scale-105"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-deep-plum transition-all duration-300 hover:bg-champagne hover:scale-105"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.73c.44.28.96.28 1.44-.02l14.45-8.35-3.3-3.3-12.6 10.13c-.43.38-.43.88.01 1.54zm.62-22.6c-.52.55-.62 1.2-.62 1.63v18.45l11.25-11.24L3.8 1.13zm17.05 9.17l-3.38-1.97-3.66 3.66 3.66 3.66 3.38-1.97c1.15-.67 1.15-2.71 0-3.38zm-5.2-1.18L5.15.51C4.78.28 4.39.17 4.03.17c-.22 0-.44.04-.63.13l12.25 9.82z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
