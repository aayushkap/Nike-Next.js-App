import React, { useEffect, useState } from "react";
import { shoeProducts } from "../constants";
import { check } from "@/assets/icons";
import Image from "next/image";

const ColourFilter = ({ colours, setColours }: any) => {
  function toggleColour(colour: string) {
    if (colours.includes(colour)) {
      setColours((prev: any) => prev.filter((c: string) => c !== colour));
    } else {
      setColours((prev: any) => [...prev, colour]);
    }
  }

  const [allColours, setAllColours] = useState<string[]>([]);

  useEffect(() => {
    const uniqueColours = new Set(
      shoeProducts.map((product) => product.colour) // Set only allows unique values
    );
    const filteredColours = Array.from(uniqueColours).sort(); // Convert Set back to an array
    setAllColours(filteredColours);
  }, [colours]);

  return (
    <section className="w-full gap-2">
      <p className="font-semibold py-1">
        Colour {colours.length ? `(${colours.length})` : ""}
      </p>
      {allColours.map((colour: any) => (
        <section className="flex justify-between items-center">
          <button
            key={colour}
            value={colour}
            onClick={() => toggleColour(colour)}
            className="w-full text-left font-montserrat hover:text-slate-gray"
          >
            {colour}
          </button>
          {colours.includes(colour) && (
            <Image src={check} alt="Check" width={15} height={15} />
          )}
        </section>
      ))}
    </section>
  );
};

export default ColourFilter;
