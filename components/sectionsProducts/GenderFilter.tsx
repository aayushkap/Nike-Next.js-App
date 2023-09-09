import React from "react";

const ShoeFilterArea = ({ gender, setGender }: any) => {
  return (
    <section className="flex flex-col gap-40 w-full font-montserrat">
      <section>
        <p className="font-semibold py-1">Gender</p>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full border-2 border-black rounded-md cursor-pointer"
        >
          <option value="All">All </option>
          <option value="Men">Men </option>
          <option value="Unisex">Unisex </option>
          <option value="Women">Women </option>
        </select>
      </section>
    </section>
  );
};

export default ShoeFilterArea;
