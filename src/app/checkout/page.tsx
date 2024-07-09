"use client";
import React, { useState } from "react";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import Image from "next/image";
import ContineShoping from "@/components/ContineShoping";

const Page = () => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="py-3">
            <ContineShoping />
            <div className="bg-secondary-darkBlue flex items-center justify-between md:hidden w-full text-white p-[10px]">
                <div onClick={() => setShow(true)} className="flex gap-3">
                    <h1 className="text-sm">Show order summary</h1>
                    <Image
                        src="/arrow-down.svg"
                        alt=""
                        width={25}
                        height={24}
                    />
                </div>
                <div>$50,000</div>
            </div>
            <div className="mx-auto w-full md:w-[80%] px-2 lg:w-full  xl:w-[80%] lg:px-5    max-lg:flex-col max-lg:gap-[24px] py-4 md:py-12 flex">
                <div className="lg:flex-1 max-h-[780px]  overflow-y-auto mx-auto  bg-[#ECEFFF] border-[#9DAEEA]  border rounded-[20px] py-[30px] px-5 md:px-[68px]">
                    <Payment />
                </div>
                <div className="h-[800px]">
                    <OrderSummary />
                    {show && <OrderSummary sm click={() => setShow(false)} />}
                </div>
            </div>
        </div>
    );
};

export default Page;
