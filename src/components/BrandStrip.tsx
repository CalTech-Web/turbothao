import Image from "next/image";
import { BRANDS } from "@/lib/constants";

export default function BrandStrip() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          Trusted Brands We Use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {BRANDS.map((brand) => (
            <div
              key={brand.name}
              className="relative h-10 w-24 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                className="object-contain"
                sizes="96px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
