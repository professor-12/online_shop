import React from "react";
import Card from "./UI/Card";
import { dummy_data } from "@/lib/dummy_data";

const ShopSection = () => {
    return (
        <section className="space-y-[51px] px-2">
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
            <div className="wrapper mx-auto gap-[14px] md:gap-[28px] grid md:grid-cols-3 grid-cols-2 xl:grid-cols-4">
                {dummy_data.map(({ name, path, price, quantity }) => {
                    return (
                        <Card
                            name={name}
                            price={price}
                            quantity={quantity}
                            path={path}
                            width="261"
                            shop
                            height="282"
                            key={path}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ShopSection;
