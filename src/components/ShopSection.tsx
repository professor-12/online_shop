"use client";
import React, { useState } from "react";

import PaginationButton from "./PaginationButton";
import Products from "@/app/sales/Products";
import Image from "next/image";
import { dummy_data } from "@/lib/dummy_data";

const ShopSection = () => {
    const [hidden, setHidden] = useState(true);
    return (
        <section id="shop" className="space-y-[51px] px-2">
            <div className="space-y-[38px]">
                <div className="space-y-[10px]">
                    <h2 className="text-[20px] md:text-[36px] text-center font-semibold">
                        Shop Now, Turn Heads Later
                    </h2>
                    <p className="text-gray md:leading-[24px] text-center text-[16px] md:text-[20px]">
                        Don’t wait to upgrade your wardrobe! Grab your favorites
                        now and be <br /> ready to turn heads wherever you go.{" "}
                    </p>
                </div>
            </div>
            <div className="xl:w-[80%]  px-3 max-md:justify-between justify-end max-md:flex-row-reverse xl:px-0 lg:px-6 mx-auto flex">
                <button
                    onClick={() => setHidden((prev) => !prev)}
                    className="bg-secondary-darkBlue lg:hidden hover:bg-[#CED7F4]   flex gap-4  text-white p-3 px-4 rounded-md"
                >
                    <span className="txt-white">Filter</span>{" "}
                    <Image
                        src="/Filter.svg"
                        width={20}
                        alt={"sd"}
                        height={20}
                    />
                </button>
            </div>
            <div className="relative">
                <Products
                    data={dummy_data}
                    hidden={hidden}
                    setHidden={setHidden}
                />
                <PaginationButton />
            </div>
        </section>
    );
};

export default ShopSection;
