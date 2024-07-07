import React from "react";
import SideBar from "./SideBar";
import { dummy_data } from "@/lib/dummy_data";
import Card from "@/components/UI/Card";

const Products = () => {
    return (
        <div className="xl:w-[80%] xl:gap-[51px] md:gap-[20px] px-3 xl:px-0 mx-auto flex my-[50px]">
            <div className="max-lg:hidden">
                <SideBar />
            </div>
            <div className="flex-[4.2] gap-[14px] md:gap-[28px] grid md:grid-cols-3 grid-cols-2 xl:grid-cols-4">
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
        </div>
    );
};

export default Products;
