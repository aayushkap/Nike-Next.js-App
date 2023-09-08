import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "@/assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "@/assets/images";
import {
  ProductShoe1,
  ProductShoe1s,
  ProductShoe2,
  ProductShoe2s,
  ProductShoe3,
  ProductShoe3s,
  ProductShoe4,
  ProductShoe4s,
  ProductShoe5,
  ProductShoe5s,
} from "@/assets/images/products";

export const navLinks = [
  { href: "", label: "Home", isRoute: true },
  { href: "about-us", label: "About Us", isRoute: false },
  { href: "products", label: "Products", isRoute: true },
  { href: "contact-us", label: "Contact Us", isRoute: false },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Stores Worldwide " },
  { value: "250M+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$100.20",
    rating: "4.7",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$110.20",
    rating: "4.7",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$120.20",
    rating: "4.6",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$130.20",
    rating: "4.5",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free Shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "24/7 Support",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.6,
    feedback:
      "As an athlete, I demand a lot from my shoes. Nike never disappoints. The support and cushioning is exceptional, and they've definitely improved my performance on the track.",
  },
  {
    imgURL: customer2,
    customerName: "Allison Byers",
    rating: 4.6,
    feedback:
      "These sneakers have become my daily companions. Whether I'm running errands or going for a quick jog, they're incredibly comfortable and hold up well to regular use.",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

export const shoeProducts = [
  {
    imgURL1: ProductShoe1,
    imgURL2: ProductShoe1s,
    name: "Nike SB Zoom Blazer Mid",
    colour: "Black",
    gender: "Unisex",
    type: "Sneakers",
    price: "$ 110.00",
    size: ["7", "8", "9", "10", "11", "12"],
    special: "New",
  },
  {
    imgURL1: ProductShoe2,
    imgURL2: ProductShoe2s,
    name: "Nike Calm",
    colour: "Black",
    gender: "Men",
    type: "Slides",
    price: "$ 99.00",
    size: ["7", "8", "9", "10", "11", "12"],
    special: "",
  },
  {
    imgURL1: ProductShoe3,
    imgURL2: ProductShoe3s,
    name: "Air Jordan I High G",
    colour: "Green",
    gender: "Men",
    type: "Sneakers",
    price: "$ 140.00",
    size: ["7", "8", "9", "10", "11", "12"],
    special: "",
  },
  {
    imgURL1: ProductShoe4,
    imgURL2: ProductShoe4s,
    name: "Nike Pegasus 39",
    colour: "Black",
    gender: "Women",
    type: "Athletic",
    price: "$ 120.00",
    size: ["7", "8", "9", "10", "11", "12"],
    special: "Best Seller",
  },
  {
    imgURL1: ProductShoe5,
    imgURL2: ProductShoe5s,
    name: "Nike React Vision",
    colour: "White",
    gender: "Unisex",
    type: "Sneakers",
    price: "$ 125.00",
    size: ["7", "8", "9", "10", "11", "12"],
    special: "New",
  },
];
