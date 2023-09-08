import React from "react";
import { shoeProducts } from "../constants";
import ShoePurchaseCard from "./cards/ShoePurchaseCard";

const ShoePurchaseArea = () => {
  return (
    <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
      {shoeProducts.map((product) => (
        <ShoePurchaseCard key={product.name} {...product} />
      ))}
    </div>
  );
};

export default ShoePurchaseArea;
