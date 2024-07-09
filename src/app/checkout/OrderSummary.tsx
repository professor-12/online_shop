"use client";
import Image from "next/image";
import React from "react";

const OrderSummary = ({ sm, click }: { sm?: boolean; click?: () => any }) => {
    const handleClick = () => {
        if (click) {
            click();
        }
        return;
    };
    const customClassName = sm
        ? "fixed top-[80px] my-3  bg-[#ECEFFF] rounded-[20px]  max-h-[30rem] overflow-y-auto shadow"
        : "lg:flex-1 px-5 lg:px-[68px]  bg-secondary-darkBlue max-md:hidden  py-[30px] rounded-[30px]";
    return (
        <div onClick={handleClick} className={customClassName}>
            {sm && (
                <div className="text-red-500 text-center w-full font-semibold flex  justify-center bg-red-300 text-lg sticky top-0">
                    <p className="">Cancel</p>
                </div>
            )}
            <div className="text-white space-y-[28px]">
                {!sm && (
                    <div className="space-y-[12px]">
                        <h1 className="text-[24px] font-semibold">
                            Order Summary
                        </h1>
                        <p>Check your order details</p>
                    </div>
                )}

                <div className="space-y-[38px]">
                    <div className="bg-[#ECEFFF] space-y-[11px] text-black rounded-[10px] p-[20px]">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="bg-[#ECEFFF] space-y-[22px] p-[10px] text-black rounded-[10px]">
                        <div className="gap-[13px]">
                            <div className="flex justify-between">
                                <h1>Cart Total</h1>
                                <p>$500,000</p>
                            </div>
                            <div className="flex justify-between">
                                <h1>Discount</h1>
                                <p>$10,000</p>
                            </div>
                            <div className="flex justify-between">
                                <h1>Delivery fees</h1>
                                <p>$000,000</p>
                            </div>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <h1>Cart Total</h1>
                            <p>$10,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;

const Card = () => {
    return (
        <div className="flex gap-[11px]">
            <div className=" bg-[#D9D9D9] flex items-center border-[#9DAEEA] rounded-[5px]">
                <Image
                    src="/unsplash_EpmJBf-kQRE.png"
                    alt=""
                    width={104}
                    height={75}
                />
            </div>
            <div className="flex flex-1 justify-between items-center">
                <div>
                    <h1 className="font-semibold text-[18px]">
                        Nike-Puma Sneakers
                    </h1>
                    <p className="text-[#646464] text-[14px] font-medium">
                        Black lasted edition
                    </p>
                    <p className="text-[#646464] text-[14px] font-medium">
                        20 - 30l
                    </p>
                    <h1 className="font-semibold text-[16px]">$40 000</h1>
                </div>
                <h1 className="text-[24px] font-semibold">x1</h1>
            </div>
        </div>
    );
};
