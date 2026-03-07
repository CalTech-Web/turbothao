export const BUSINESS_INFO = {
  name: "TurboThao Nails and Spa",
  tagline: "TurboThao Nails!",
  headline: "Nail care, waxing, and eyelash extensions in Glendale AZ",
  description:
    "Experience where beauty meets precision and relaxation. From stunning nail artistry and acrylics to luxurious pedicures and waxing, we transform your beauty routine into a pampering experience you'll love.",
  aboutTitle: "Who We Are",
  aboutSubtitle: "Where Style Meets Serenity",
  aboutDescription:
    "At TurboThao Nails and Spa, we blend artistry with relaxation to create a haven for beauty enthusiasts. Our mission is to offer top-tier nail care, waxing, and spa services that prioritize both your appearance and wellbeing.",
};

export const CONTACT_INFO = {
  address: "Suite 9, 5930 W Greenway Ave, Glendale, AZ 85306",
  phone: "(602) 441-3887",
  phoneLink: "tel:+16024413887",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.7!2d-112.185!3d33.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s5930+W+Greenway+Ave+Suite+9+Glendale+AZ+85306!5e0!3m2!1sen!2sus!4v1",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=5930+W+Greenway+Ave+Suite+9+Glendale+AZ+85306",
  hours: [
    { days: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { days: "Saturday", time: "9:00 AM - 7:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const EXPERTISE = [
  {
    title: "Nail Artistry with Precision",
    description:
      "From classic manicures to intricate nail art, every detail is crafted with care and expertise.",
    icon: "sparkles" as const,
  },
  {
    title: "Luxurious Spa & Waxing Services",
    description:
      "Indulge in smooth, professional waxing and rejuvenating spa treatments for total relaxation.",
    icon: "flower" as const,
  },
  {
    title: "Enhancing Natural Beauty",
    description:
      "Expert eyelash extensions and eyebrow services that highlight your natural features effortlessly.",
    icon: "heart" as const,
  },
];

export const SERVICES = [
  {
    title: "Nail Perfection",
    description:
      "Crafting stunning nail designs and flawless manicures that showcase your personal style with precision.",
    icon: "paintbrush" as const,
  },
  {
    title: "Waxing Services",
    description:
      "Providing smooth, professional waxing for both men and women, ensuring soft, radiant skin.",
    icon: "scissors" as const,
  },
  {
    title: "Eyelash Extensions",
    description:
      "Expert technicians apply high-quality extensions that add volume, length, and fullness, giving you a stunning, effortless look.",
    icon: "eye" as const,
  },
  {
    title: "Your Beauty, Our Priority",
    description:
      "Experience personalized, professional care with every visit, focusing on your unique beauty needs.",
    icon: "heart" as const,
  },
];

export const SERVICE_DETAILS = [
  {
    id: "nail-services",
    title: "Nail Services",
    items: [
      "Nail Art",
      "Acrylic Full Set",
      "Acrylic Fill-Ins",
      "Nail Repairs",
      "Gel Nail Removal",
      "Dip Powder Nails",
      "Gel Polish Application",
      "Custom Nail Design",
    ],
  },
  {
    id: "manicure-pedicure",
    title: "Manicure & Pedicure",
    items: [
      "Classic Manicure",
      "Classic Pedicure",
      "Deluxe Manicure",
      "Deluxe Pedicure",
      "Callus Removal",
      "Polish Changes",
      "French Manicure",
      "Paraffin Treatment",
    ],
  },
  {
    id: "eyelash-eyebrow",
    title: "Eyelash & Eyebrow Services",
    items: [
      "Eyelash Extensions",
      "Eyelash Lift & Tint",
      "Eyebrow Shaping",
      "Eyebrow Tinting",
      "Lash Fill",
      "Lash Removal",
    ],
  },
  {
    id: "waxing",
    title: "Waxing Services",
    items: [
      "Full Body Waxing",
      "Brazilian Wax",
      "Bikini Wax",
      "Underarm Wax",
      "Facial Waxing",
      "Leg Waxing",
      "Arm Waxing",
      "Men's Waxing Services",
    ],
  },
  {
    id: "spa-enhancements",
    title: "Spa Enhancements",
    items: [
      "Foot Massage",
      "Hand Massage",
      "Hot Stone Add-On",
      "Aromatherapy Add-On",
      "Collagen Hand Treatment",
      "Sugar Scrub",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Julie G.",
    quote:
      "If you're in search of excellent service and long-lasting nails, Thao Nails is the perfect spot. I've been loyal to Cici since before she opened her salon. She goes above and beyond every single time.",
    rating: 5,
  },
  {
    name: "Mamie M.",
    quote:
      "My nails sparkle like diamond dust — it's such a glamorous look! The vibrant color selection is incredible, and Vi always provides exceptional service. I wouldn't go anywhere else.",
    rating: 5,
  },
  {
    name: "Susan M.",
    quote:
      "Amazing place with convenient hours. I never feel rushed, and they always accommodate me even for urgent requests. Been a client here forever and wouldn't dream of going elsewhere.",
    rating: 5,
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  {
    label: "Our Services",
    href: "#services",
    children: [
      { label: "Nail Services", href: "#nail-services" },
      { label: "Manicure & Pedicure", href: "#manicure-pedicure" },
      { label: "Eyelash & Eyebrow", href: "#eyelash-eyebrow" },
      { label: "Waxing Services", href: "#waxing" },
      { label: "Spa Enhancements", href: "#spa-enhancements" },
    ],
  },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "#contact" },
];

export const FOOTER_LINKS = [
  { label: "Nail Art", href: "#nail-services" },
  { label: "Acrylic Full Set", href: "#nail-services" },
  { label: "Callus Removal", href: "#manicure-pedicure" },
  { label: "Classic Pedicure", href: "#manicure-pedicure" },
  { label: "Acrylic Fill-In", href: "#nail-services" },
  { label: "View All Services", href: "#services" },
];
