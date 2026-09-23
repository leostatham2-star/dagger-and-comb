export const BRAND = {
  name: "Dagger & Comb",
  legalName: "Dagger & Comb LLC",
  tagline: "Sharp cuts. Honest ink.",
  type: "Barbershop & Tattoo Studio",
  estYear: 2012,
  address: "1420 N Milwaukee Ave, Chicago, IL 60622",
  addressShort: "1420 N Milwaukee Ave, Wicker Park",
  phone: "(312) 555 0184",
  phoneHref: "tel:+13125550184",
  email: "chairs@daggerandcomb.com",
  hours: [
    { days: "Tuesday to Friday", time: "10 AM to 8 PM" },
    { days: "Saturday", time: "9 AM to 6 PM" },
    { days: "Sunday", time: "11 AM to 4 PM" },
    { days: "Monday", time: "Closed" },
  ],
  hoursShort: "Tue to Sat from 9 AM. Closed Mondays.",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=1420+N+Milwaukee+Ave+Chicago+IL+60622",
};

export const NAV_LINKS = [
  { label: "Home", href: "#/" },
  { label: "About Us", href: "#/about" },
  { label: "Services", href: "#/services" },
  { label: "Gallery", href: "#/gallery" },
  { label: "Our Team", href: "#/team" },
  { label: "Contact Us", href: "#/contact" },
];

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  price: string;
  priceNote?: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    slug: "cuts",
    title: "Signature Cuts",
    blurb:
      "Classic scissor work, clean tapers and skin fades. We cut it the way it will actually sit on your head, not the way it looked in the photo.",
    description:
      "Every cut starts with a real consultation in the chair. We look at how your hair falls, how you work, and how much time you spend on it in the morning. Then we earn the shape with clippers, shears and patience. A buzz with a straight razor edge takes twenty minutes. A full scissor cut with a hot towel finish takes the better part of an hour.",
    price: "$40",
    priceNote: "Skin fades $45. Kids under 12 $30.",
    image: "/images/cut-dark.jpg",
  },
  {
    slug: "shaves",
    title: "Straight Razor Shaves",
    blurb:
      "Hot towels, thick lather and a blade that has been stropped that morning. Forty minutes where nobody can reach you.",
    description:
      "The full ritual. Two hot towels to open you up, pre shave oil, a thick brush built lather, and one clean pass with a hollow ground blade. We finish with cold towels and a bay rum splash that stings exactly as much as it should. Come in early on a Saturday, grab the paper, and let the shop wake up around you.",
    price: "$45",
    priceNote: "First shave includes a free blade conditioning treatment.",
    image: "/images/shave-foam.jpg",
  },
  {
    slug: "beards",
    title: "Beard Trim & Sculpt",
    blurb:
      "From weekend stubble to a beard with actual architecture. Lines drawn with a straight razor, finished with oil we blend in house.",
    description:
      "Beards are shaped to your face, not to a chart. We map the cheek line, set the neckline, then scissor and clipper the body until it sits right. Every sculpt ends with a hot towel and a few drops of our cedar and clove oil. Ask us about growing out an awkward phase. We will get you through it.",
    price: "$25",
    priceNote: "Full sculpt with hot towel $35.",
    image: "/images/beard-trim.jpg",
  },
  {
    slug: "tattoos",
    title: "Custom Tattoos",
    blurb:
      "Custom pieces, cover ups and walk in flash. Black and grey, traditional, and fine line work from two resident artists.",
    description:
      "Bring an idea, a reference, or nothing at all. Our artists sketch every custom piece from scratch and will not tattoo something they would not wear themselves. Consultations are free and take as long as they take. Small flash starts at $100. Larger pieces are quoted by the session at $150 an hour.",
    price: "$150",
    priceNote: "Per hour. Flash from $100.",
    image: "/images/tattoo-artist.jpg",
  },
];

export const PRICE_ROWS = [
  { name: "Signature haircut", price: "$40" },
  { name: "Skin fade", price: "$45" },
  { name: "Buzz cut with razor edge", price: "$25" },
  { name: "Kids cut, under 12", price: "$30" },
  { name: "Straight razor shave", price: "$45" },
  { name: "Beard trim", price: "$25" },
  { name: "Beard sculpt with hot towel", price: "$35" },
  { name: "Line up", price: "$25" },
  { name: "Haircut + shave combo", price: "$70" },
  { name: "Gray blend", price: "$30" },
  { name: "Tattoo session, per hour", price: "$150" },
  { name: "Flash and small pieces", price: "from $100" },
];

export type Member = {
  name: string;
  role: string;
  image: string;
  bio: string;
  creds: string[];
};

export const TEAM: Member[] = [
  {
    name: "Ray Delgado",
    role: "Owner, Master Barber",
    image: "/images/barber-ray.jpg",
    bio: "Ray opened Dagger & Comb in 2012 with two chairs, a borrowed stereo and a sign he painted himself. Fourteen years later he still cuts six days a week and still takes the walk ins nobody else wants. He apprenticed under a barber on the South Side who made him do nothing but flat tops for a year, and he will tell you it was the best thing that ever happened to him.",
    creds: ["21 years behind the chair", "Straight razor specialist", "Speaks English and Spanish"],
  },
  {
    name: "Marcus Webb",
    role: "Senior Barber",
    image: "/images/barber-marcus.jpg",
    bio: "Marcus spent twenty five years cutting in Bronzeville before he walked through our door looking for a chair near home. He does the kind of work you cannot rush: hot towel shaves, gray blending, and razor cuts on silver hair that most barbers are scared to touch. Ask him about the old days and you might miss your appointment.",
    creds: ["25 years in the trade", "Gray blend and silver specialist", "Hot towel shaves only, no machines"],
  },
  {
    name: "Joey Carver",
    role: "Barber",
    image: "/images/barber-joey.jpg",
    bio: "Joey came up through the shop as a sweeper at sixteen, talked Ray into an apprenticeship at nineteen, and never left. He is the one your kids will ask for by name, and the one who keeps the shop playlist honest. Fades, tapers, and anything that needs a fresh eye, that is his lane.",
    creds: ["7 years licensed", "Fade and taper specialist", "Good with first haircuts"],
  },
  {
    name: "Sunny Whitfield",
    role: "Resident Tattoo Artist",
    image: "/images/artist-sunny.jpg",
    bio: "Sunny has been tattooing for eleven years, the last four at Dagger & Comb. She draws every custom piece by hand before the needle ever turns on, and she is known for black and grey work that holds its lines ten years later. Cover ups are her quiet specialty. Half the shop's regulars were referred by someone she fixed.",
    creds: ["11 years tattooing", "Black and grey, fine line", "Cover ups and reworks"],
  },
  {
    name: "Diego Fuentes",
    role: "Resident Tattoo Artist",
    image: "/images/artist-diego.jpg",
    bio: "Diego apprenticed in Guadalajara, worked conventions up and down the coast, and landed in Chicago for the winters, in his words. He does American traditional with heavy, clean lines, and his flash wall by the front window gets redrawn every few months. He takes walk ins on Sundays.",
    creds: ["9 years tattooing", "American traditional", "Flash walk ins on Sundays"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Been coming here since the shop had two chairs. Ray faded me up for my wedding and my mother in law actually said I looked handsome. First time for everything.",
    name: "Derek M.",
    detail: "Regular since 2014",
  },
  {
    quote:
      "Sunny spent an hour with me before we talked money, just sketching and getting the idea right. That kind of patience is rare. The sleeve she finished last month is the best piece I own.",
    name: "Antoine R.",
    detail: "Sleeve by Sunny",
  },
  {
    quote:
      "The hot towel shave ruined every other shave for me. I sit there like a king for forty minutes and walk out feeling like the version of myself I promised my wife I would be.",
    name: "Peter K.",
    detail: "Biweekly shave client",
  },
  {
    quote:
      "Took my son in for his first proper cut. Joey was patient with him, gave him a lollipop from the jar by the register and sent him home looking sharp. We are customers for life.",
    name: "Sean O.",
    detail: "Father of a six year old critic",
  },
  {
    quote:
      "I booked a cover up I had been hiding for ten years. Sunny turned a bad decision into something I actually show off. No judgment, no lecture, just good work.",
    name: "Melissa T.",
    detail: "Cover up client",
  },
];

export const PRODUCTS = [
  {
    name: "Matte Clay Pomade",
    price: "$22",
    image: "/images/product-pomade.jpg",
    note: "Hold that survives the CTA platform. Washes out with water.",
  },
  {
    name: "Beard Oil No. 4",
    price: "$18",
    image: "/images/product-oil.jpg",
    note: "Cedar and clove, blended in house. The smell of the shop in a bottle.",
  },
  {
    name: "Shave Starter Kit",
    price: "$38",
    image: "/images/shop-products.jpg",
    note: "Razor, brush, soap and a how to card written by Marcus himself.",
  },
  {
    name: "Travel Grooming Kit",
    price: "$34",
    image: "/images/product-kit.jpg",
    note: "Comb, oil, wax and clippers in a tin. Fits a carry on, survives a tour.",
  },
];

export type GalleryItem = {
  image: string;
  title: string;
  category: "cuts" | "tattoos";
  credit: string;
};

export const GALLERY: GalleryItem[] = [
  { image: "/images/cut-dark.jpg", title: "Low fade, scissor top", category: "cuts", credit: "Ray" },
  { image: "/images/work-back.jpg", title: "Back piece, session four", category: "tattoos", credit: "Sunny" },
  { image: "/images/fresh-profile.jpg", title: "Taper with a razor part", category: "cuts", credit: "Joey" },
  { image: "/images/work-face.jpg", title: "Custom face work", category: "tattoos", credit: "Sunny" },
  { image: "/images/work-trim.jpg", title: "Grow out rescue trim", category: "cuts", credit: "Ray" },
  { image: "/images/work-butterfly.jpg", title: "Fine line forearm piece", category: "tattoos", credit: "Sunny" },
  { image: "/images/shave-bw.jpg", title: "Straight razor pass", category: "cuts", credit: "Marcus" },
  { image: "/images/work-arm.jpg", title: "Black and grey sleeve", category: "tattoos", credit: "Sunny" },
  { image: "/images/client-neck.jpg", title: "Neck rose, healed", category: "tattoos", credit: "Diego" },
  { image: "/images/beard-trim.jpg", title: "Beard line up", category: "cuts", credit: "Ray" },
  { image: "/images/client-floral.jpg", title: "Ear and neck floral", category: "tattoos", credit: "Diego" },
  { image: "/images/client-torso.jpg", title: "Full front, two year project", category: "tattoos", credit: "Sunny" },
  { image: "/images/machine.jpg", title: "Lining at the convention", category: "tattoos", credit: "Diego" },
  { image: "/images/shave-foam.jpg", title: "Hot towel and lather", category: "cuts", credit: "Marcus" },
];

export const ROUTES = {
  home: "#/",
  about: "#/about",
  services: "#/services",
  gallery: "#/gallery",
  team: "#/team",
  contact: "#/contact",
} as const;

export type RouteKey = keyof typeof ROUTES;
