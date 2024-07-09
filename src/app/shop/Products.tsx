"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";
import { dummy_data } from "@/lib/dummy_data";
import Card from "@/components/UI/Card";

const Products = () => {
    const [hidden, setHide] = useState(true);
    return (
        <div className="xl:w-[80%] relative xl:gap-[51px] md:gap-[20px]  xl:px-0 mx-auto flex my-[12px] md:my-[50px]">
            <div className="max-lg:hidden">
                <SideBar />
            </div>
            {/* {!hidden && <SideBar sm setHidden={setHide} />} */}
            <div className="lg:flex-[4.2] w-full gap-[14px] md:gap-[28px] grid place-content-center sm:grid-cols-3  md:grid-cols-3 grid-cols-2">
                {dummy_data.map(({ name, path, price, quantity }) => {
                    return (
                        <Card
                            name={name}
                            price={price}
                            quantity={quantity}
                            shop
                            path={path}
                            width="210"
                            height="282"
                            key={path}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Products;
