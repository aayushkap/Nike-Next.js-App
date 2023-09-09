import Image from "next/image";
import React from "react";

const ShoePurchaseCard = ({
  imgURL1,
  name,
  price,
  type,
  gender,
  special,
}: any) => {
  return (
    <section className="px-0 h-fit cursor-pointer">
      <div className="flex flex-col max-md:items-center">
        <Image
          src={imgURL1}
          height={300}
          width={300}
          alt={name}
          className=" shadow-md rounded-md"
        />

        <div className="w-full max-w-[300px] font-montserrat flex flex-col py-2">
          <div className="w-full text-coral-red text-sm font-semibold ">
            {special}
          </div>
          <div className="w-full font-semibold text-xl">{name}</div>
          <div className="w-full text-slate-gray text-md">
            {type} - {gender}
          </div>

          <div className="w-full py-2 font-semibold text-xlk ">{price}</div>
        </div>
      </div>
    </section>
  );
};

export default ShoePurchaseCard;
