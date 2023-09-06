import Image from "next/image";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border border-coral-red font-montserrat text-lg leading-none bg-coral-red rounded-full text-white hover:bg-white hover:text-coral-red transition-all">
      {label}
      {iconURL && (
        <Image
          src={iconURL}
          alt="Arrow Right"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
};

export default Button;
