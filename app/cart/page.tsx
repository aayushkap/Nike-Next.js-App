"use client";

import { delivery } from "@/assets/icons";
import { shipMsg, shipVal } from "@/components/constants";
import CartItemCard from "@/components/sectionsCart/CartItemCard";
import { get } from "http";
import { set } from "mongoose";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import { useEffect, useState } from "react";

const page = () => {
  const [cartItems, setCartItems] = useState<any[]>([]); // Store Cart Items as hook from Local Storage
  const [total, setTotal] = useState<number>(0); // Store Total as hook from Cart Items
  const [discTotal, setDiscTotal] = useState<number>(0); // Store Dsicounted Total as hook from Cart Items

  useEffect(() => {
    // Update cart items on page load.
    const newCartItems = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key?.startsWith("cart-")) {
        const jsonValue = localStorage.getItem(key);

        const value = JSON.parse(jsonValue ?? "null");

        value.localKey = key;

        newCartItems.push(value);
      }
    }
    setCartItems(newCartItems); //Update hook
  }, []);

  // Update cart items on item removed.
  const updateCartItems = (updatedCartItems: any) => {
    setCartItems(updatedCartItems);
  };

  function getTotal() {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      const itemPrice = parseFloat(item["price"].replace("$", ""));
      totalPrice += itemPrice;
    });

    return totalPrice; // Return the total without setting the state here
  }

  const [userCode, setUserCode] = useState<any>("");
  const [discountAmt, setDiscountAmt] = useState<string>("");
  const [reply, setReply] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Call getTotal and set the total once after cartItems change
    setTotal(getTotal());
    setDiscTotal(getTotal() - (getTotal() * parseInt(discountAmt)) / 100);
  }, [cartItems, discountAmt]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setReply("");
    setLoading(true);
    setDiscountAmt("0");

    const res = await fetch("/api/contact", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });

    const { success, discountCodes } = await res.json();
    if (success) {
      for (let i = 0; i < discountCodes.length; i++) {
        let code = discountCodes[i];
        if (code.code == userCode) {
          if (code.validity) {
            setDiscountAmt(code.discount);
            setReply("Code applied.");
            break;
          } else {
            setReply("Code is no longer valid.");
            break;
          }
        } else {
          setReply("Code does not exist.");
        }
      }
    }
    setLoading(false);
  };

  return (
    <>
      <main className="relative">
        <div className="w-full min-h-screen relative max-container pt-28">
          <div className="bg-coral-red bg-opacity-25 leading-10 rounded-lg text-center font-montserrat text-md w-full ">
            {shipMsg}
          </div>
          <section className="flex max-lg:flex-col flex-row">
            <div className="max-lg:w-full w-2/3 p-10 flex flex-col gap-5">
              {cartItems.map((item) => (
                <CartItemCard
                  key={item["localKey"]}
                  localKey={item["localKey"]}
                  name={item["name"]}
                  size={item["size"]}
                  price={item["price"]}
                  updateCartItems={updateCartItems}
                />
              ))}
            </div>
            <div className="max-lg:w-full w-1/3 p-10 font-montserrat">
              <p className="text-xl font-semibold leading-10">
                Subtotal ({cartItems.length})
              </p>
              <div>$ {total} (Inclusive of VAT)</div>
              <hr className="my-5" />
              <div className="flex items-center gap-3">
                <Image
                  src={delivery}
                  alt="Delivery Truck"
                  width={20}
                  height={20}
                />
                {total >= shipVal ? (
                  <div className="font-palanquin">
                    Applicable for free shipping.
                  </div>
                ) : (
                  <div>Shipping will be calculated on checkout.</div>
                )}
              </div>
              <hr className="my-5" />
              <section>
                <p className="text-xl font-semibold pb-2">Coupon Code</p>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center gap-3"
                >
                  <input
                    type="text"
                    required
                    placeholder="Enter"
                    className="input border rounded-full p-2"
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                  ></input>
                  <button
                    className={`p-2 active:ring-1 ring-black rounded-full transition-all disabled:text-gray-500 disabled:active:ring-0 ${
                      loading ? " animate-pulse" : ""
                    }`}
                    disabled={loading}
                  >
                    Apply
                  </button>
                </form>
                {reply ? <p className="pt-2">{reply}</p> : null}
              </section>
              <hr className="my-5" />
              <section>
                <p className="text-xl font-semibold leading-10">Total</p>
                {parseInt(discountAmt) > 0 ? (
                  <div>
                    $ {total} -{" "}
                    <p className="text-coral-red inline">{discountAmt}%</p> = ${" "}
                    {discTotal}
                  </div>
                ) : (
                  <div>$ {total}</div>
                )}
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default page;
