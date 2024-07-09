"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Summary = () => {
    const { push } = useRouter();
    return (
        <div className="space-y-[26px]">
            <div className="border-[2px]  p-[10px] border-secondary-darkBlue rounded-[10px] space-y-[22px]">
                <h1 className="text-center font-[600] text-[18px]">
                    Order Summary
                </h1>
                <div className="wrapper space-y-[37px] mx-auto">
                    <div className="space-y-[30px]">
                        <div className="flex flex-col space-y-[7px]">
                            <label className="text-[16px]">
                                Apply Promo code
                            </label>
                            <input
                                className="bg-transparent placeholder:text-[#646464] p-[10px] texxt-[14px] rounded-[5px] border-[1px] border-[#646464]"
                                type="text"
                                placeholder="Enter the Promo Code"
                                name=""
                                id=""
                            />
                        </div>
                        <div className="sapce-y-[13px]">
                            <div className="flex justify-between">
                                <h1 className="text-[16px] font-[400]">
                                    Cart Total
                                </h1>
                                <p>$500,000</p>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-[16px] font-[400]">
                                    Discount
                                </h1>
                                <p>$10,000</p>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="text-[16px] font-[400]">
                                    Delivery fees
                                </h1>
                                <p>$0000</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-[18px]">
                        <div className="flex font-semibold justify-between">
                            <h1 className="">Total</h1>
                            <p>$510,000</p>
                        </div>
                        <button
                            onClick={() => push("/checkout")}
                            className="w-full text-white  hover:bg-[#CED7F4] transition-all duration-1000 bg-secondary-darkBlue text-center p-[10px] rounded-[5px]"
                        >
                            Checkout
                        </button>
                        <button
                            onClick={() => push("/#shop")}
                            className="w-full text-secondary-darkBlue hover:text-[#CED7F4] hover:border-[#CED7F4] transition-all duration-1000 font-semibold  border   border-secondary-darkBlue text-center p-[10px] rounded-[5px]"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>

            <button className="w-full flex items-center gap-[10px]  justify-center  text-[#FB6969]  border-[#FB6969] p-[10px] rounded-[8px]  border">
                <Image width={20} alt="" height={20} src="/diamond.svg" />
                <span className="md:text-[14px] text-sm text-nowrap text-[#B91D1D]">
                    Delivery fees is calculated at checkout
                </span>
            </button>
        </div>
    );
};

export default Summary;
