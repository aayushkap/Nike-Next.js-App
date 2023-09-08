"use client";

import { filter } from "@/assets/icons";
import { useState } from "react";
import Image from "next/image";
import { shoeProducts } from "@/components/constants";
import ShoePurchaseCard from "@/components/sectionsProducts/cards/ShoePurchaseCard";
import ShoePurchaseArea from "@/components/sectionsProducts/ShoePurchaseArea";

export default function Home() {
  const [filters, setFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);

  return (
    <main className="relative">
      <div className=" w-full relative max-container pt-28 ">
        <div className="bg-coral-red bg-opacity-25 leading-10 rounded-xl text-center font-palanquin text-md w-full">
          Free Shipping for orders over $50.
        </div>
      </div>
      <section className="flex justify-center items-center py-5 lg:hidden">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="flex justify-center items-center gap-2 px-5 py-3 border border-coral-red font-montserrat text-lg rounded-xl text-black"
        >
          Filters
          <Image src={filter} alt="Arrow Right" className="ml-2 w-5 h-5 " />
        </button>
      </section>
      <section className="w-full flex lg:flex-row flex-col justify-center lg:h-fit max-container">
        <div className="relative lg:w-1/5 max-lg:hidden w-full p-10 flex flex-col justify-between items-center border ">
          <div>Gender</div>
          <div>Color</div>
          <div>Size</div>
          <div>Price</div>
        </div>
        <div className="relative lg:w-4/5 w-full p-10 sm:p-20">
          <ShoePurchaseArea />
        </div>
      </section>
    </main>
  );
}
