import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://turbothao.vercel.app";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/our-services`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/nail-services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/manicure-and-pedicure`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/eyelash-and-eyebrow-services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/waxing-services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/spa-enhancements`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), priority: 0.7 },
  ];
}
