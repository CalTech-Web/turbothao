import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-primary-soft pt-[80px]">
      <div className="mx-auto max-w-lg px-6 text-center">
        <p className="font-script text-6xl text-accent-pink md:text-8xl">Oops</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-text-primary md:text-4xl">
          Page Not Found
        </h1>
        <div className="mt-5 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-accent-pink/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-accent-pink/40" />
          <div className="h-px w-12 bg-accent-pink/30" />
        </div>
        <p className="mt-5 text-base italic text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-block rounded-full bg-accent-pink px-8 py-3 text-base font-semibold text-white shadow-[0_4px_15px_rgba(242,4,115,0.3)] transition-all duration-300 hover:bg-accent-pink-light hover:shadow-[0_6px_20px_rgba(242,4,115,0.4)]"
          >
            Go Home
          </Link>
          <Link
            href="/our-services"
            className="inline-block rounded-full border-2 border-accent-pink/30 px-8 py-3 text-base font-semibold text-text-secondary transition-all duration-300 hover:border-accent-pink hover:text-accent-pink"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
