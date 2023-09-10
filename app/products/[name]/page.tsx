"use client";

import { shoeProducts } from "@/components/constants";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

// Interface for the shoe details
interface Shoe {
  id: number;
  imgURL1: StaticImageData;
  imgURL2: StaticImageData;
  name: string;
  colour: string;
  gender: string;
  type: string;
  price: string;
  size: number[];
  special: string;
}

export default function Page({ params }: any) {
  const shoeName = decodeURI(params.name);

  var shoeDetails: Shoe | null = null;

  // Find the matching shoe in shoeProducts
  shoeProducts.forEach((shoe) => {
    if (shoe.name === shoeName) {
      shoeDetails = shoe;
    }
  });

  const [sizeSelected, setSizeSelected] = useState(0);
  const [showEnlarged, setShowEnlarged] = useState(false);

  return (
    <>
      {shoeDetails && (
        <main className={`relative transition-all`}>
          <div className="w-full min-h-screen relative max-container pt-28">
            {showEnlarged && (
              <section
                className="w-full absolute p-10 z-10 bg-white border-2 rounded-2xl h-screen overflow-y-auto max-container cursor-pointer"
                onClick={() => setShowEnlarged(false)}
              >
                <div className="w-full flex flex-col gap-4 justify-between items-center object-contain">
                  <Image
                    src={shoeDetails["imgURL1"]}
                    alt={shoeDetails["name"]}
                    width={1000}
                    height={1000}
                    className="bg-slate-50 rounded-xl"
                  />
                  <Image
                    src={shoeDetails["imgURL2"]}
                    alt={shoeDetails["name"]}
                    width={1000}
                    height={1000}
                    className="bg-slate-50 rounded-xl"
                  />
                </div>
              </section>
            )}
            <div className="bg-coral-red bg-opacity-25 leading-10 rounded-lg text-center font-palanquin text-md w-full ">
              Free Shipping for orders over $99.
            </div>
            <section
              className={`flex justify-center max-lg:flex-col ${
                showEnlarged ? "blur-sm" : ""
              }`}
            >
              <div className="p-10 xl:w-2/3 flex items-center justify-center max-xl:flex-col gap-5 ">
                <button onClick={() => setShowEnlarged(true)}>
                  <Image
                    src={shoeDetails["imgURL1"]}
                    alt={shoeDetails["name"]}
                    width={400}
                    height={400}
                    className="bg-slate-50 rounded-xl"
                  />
                </button>
                <button onClick={() => setShowEnlarged(true)}>
                  <Image
                    src={shoeDetails["imgURL2"]}
                    alt={shoeDetails["name"]}
                    width={400}
                    height={400}
                    className="bg-slate-50 rounded-xl"
                  />
                </button>
              </div>
              <div className="w-1/3 h-fit min-h-[400px] p-10 max-lg:w-full">
                <div className="w-full text-coral-red text-sm font-semibold ">
                  {shoeDetails["special"]}
                </div>
                <div className="w-full font-semibold text-4xl ">
                  {shoeDetails["name"]}
                </div>
                <div className="w-full text-slate-gray text-md py-0">
                  {shoeDetails["type"]} - {shoeDetails["gender"]}
                </div>
                <div className=" py-4 font-montserrat text-slate-gray text-lg leading-6">
                  {shoeDetails["description"]}
                </div>
                <div className="w-full py-2 font-semibold text-md ">
                  {shoeDetails["price"]}
                </div>
                <div className="text-[15px] text-slate-600 font-montserrat font-semibold py-2">
                  Select Size
                </div>
                <section className="grid grid-cols-4 gap-x-16 gap-y-2 max-md:gap-x-8 max-w-md">
                  {(shoeDetails["size"] as any[]).map((size: any) => (
                    <button
                      key={size}
                      value={size}
                      className={`text-center font-montserrat border-2 w-16 rounded-md p-1 ${
                        sizeSelected === size
                          ? "border-coral-red border-2"
                          : "border-slate-600"
                      }}`}
                      onClick={() => setSizeSelected(size)}
                    >
                      {size}
                    </button>
                  ))}
                </section>
              </div>
            </section>
          </div>
        </main>
      )}
    </>
  );
}