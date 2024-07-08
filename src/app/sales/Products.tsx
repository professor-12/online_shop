import Card from "@/components/UI/Card";
import { bestDealData, dummy_data } from "@/lib/dummy_data";
import React from "react";
import SideBar from "../shop/SideBar";

const Products = () => {
    return (
        <div className="xl:w-[70%] xl:gap-[51px] md:gap-[20px] px-3 xl:px-0 lg:px-6 mx-auto flex my-[50px]">
            <div className="max-lg:hidden">
                <SideBar />
            </div>
            <div className="lg:flex-[4.2] w-full gap-[14px] md:gap-[28px]  grid place-content-center sm:grid-cols-3  md:grid-cols-3 grid-cols-1 xl:grid-cols-3">
                {bestDealData.map(
                    ({ name, path, price, quantity, ...fake }) => {
                        return (
                            <Card
                                name={name}
                                price={price}
                                quantity={quantity}
                                fakeprice={fake.fake}
                                path={path}
                                width="210"
                                height="282"
                                key={path}
                            />
                        );
                    }
                )}
                {bestDealData.map(({ name, path, price, quantity, fake }) => {
                    return (
                        <Card
                            name={name}
                            price={price}
                            quantity={quantity}
                            path={path}
                            fakeprice={fake}
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
