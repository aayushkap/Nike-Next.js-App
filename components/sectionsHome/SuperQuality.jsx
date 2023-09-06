import { shoe8 } from "@/assets/images";
import Button from "../shared/Button";

import Image from "next/image";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Experience the
          <span className="text-coral-red"> Art </span>
          <br />
          of
          <span className="text-coral-red"> Innovation</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Enjoy the intersection of technology and design with our innovative
          footwear. From responsive cushioning systems to advanced materials,
          each shoe is a testament to our commitment to pushing the boundaries
          of what's possible.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Walk, run, or jump with confidence, knowing that every step is
          supported by cutting-edge technology.
        </p>
        <div className="mt-6">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={shoe8}
          alt="shoe8"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
