import React from "react";
import Card from "./UI/Card";
import { dummy_data } from "@/lib/dummy_data";
import Products from "@/app/sales/Products";
import PaginationButton from "./PaginationButton";

const ShopSection = () => {
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
            <div>
                <Products />
                <PaginationButton />
            </div>
        </section>
    );
};

export default ShopSection;
