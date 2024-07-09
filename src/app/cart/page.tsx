import React from "react";
import CartCard from "./CartCard";
import Summary from "./Summary";
import ContineShoping from "@/components/ContineShoping";
import { cart } from "@/lib/dummy_data";

const Cart = () => {
    return (
        <div className="bg-[#E8EBF8] px-3 lg:px-5">
            <ContineShoping />
            <div className="md:py-12 py-6  xl:w-[80%]  mx-auto space-y-[30px] min-h-screen">
                <div>
                    <div className="text-center justify-center  w-full items-center gap-[13px] flex">
                        <h1 className="text-xl md:text-[36px]  font-medium">
                            My Carts
                        </h1>
                        <p>(3 items)</p>
                    </div>
                </div>
                <div className="flex max-md:flex-col space-y-[39px] md:space-y-0 md:space-x-6 xl:space-x-[118px]">
                    <div className="space-y-[20px] flex-[2]">
                        {cart.map(({ name, path, price }) => {
                            return (
                                <CartCard
                                    key={path}
                                    name={name}
                                    path={path}
                                    price={price}
                                />
                            );
                        })}
                    </div>
                    <div className="space-y-[12px] flex-1">
                        <Summary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
