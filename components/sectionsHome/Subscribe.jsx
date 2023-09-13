"use client";

import Button from "../shared/Button";
import { useState } from "react";
import { swoosh } from "@/assets/icons";
import Image from "next/image";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const { msg } = await res.json();
    setMsg(msg);
    setEmail("");
  };

  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 pb-5"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>

      <form onSubmit={handleSubmit} className="w-full h-fit">
        <div className="flex border-2 border-slate-gray w-full p-2 items-center rounded-full font-montserrat">
          <input
            type="email"
            required
            placeholder="subscribe@nike.com"
            className="input"
            minLength={5}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="bg-coral-red border-2 border-coral-red h-full min-h-[50px] rounded-full w-56 text-white font-semibold hover:text-black hover:bg-transparent transition-all flex justify-center items-center">
            {msg === "success" ? (
              <Image src={swoosh} alt="Tick" width={50} height={50} />
            ) : msg === "fail" ? (
              "Failed"
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Subscribe;
