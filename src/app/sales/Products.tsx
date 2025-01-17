import Card from "@/components/UI/Card";

import React from "react";
import SideBar from "../shop/SideBar";

const Products = ({
    hidden,
    setHidden,
    data,
}: {
    hidden?: boolean;
    setHidden?: any;
    data: any;
}) => {
    return (
        <div className="xl:w-[80%] xl:gap-[51px] md:gap-[20px] px-3 xl:px-0 lg:px-6 mx-auto flex my-[50px]">
            <div className="max-lg:hidden">
                <SideBar />
            </div>
            {!hidden && (
                <div className="lg:hidden">
                    <SideBar sm setHidden={setHidden} />
                </div>
            )}
            <div className="lg:flex-[4.2] w-full gap-[14px] md:gap-[28px]  grid place-content-center sm:grid-cols-3  md:grid-cols-3 grid-cols-2 xl:grid-cols-3">
                {data.map(({ name, path, price, quantity, ...fake }: any) => {
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
