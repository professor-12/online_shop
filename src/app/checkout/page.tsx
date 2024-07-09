import React from "react";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import Image from "next/image";

const page = () => {
    return (
        <div className="py-3">
            <div className="bg-secondary-darkBlue flex items-center justify-between md:hidden w-full text-white p-[10px]">
                <div className="flex gap-3">
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
            <div className="mx-auto w-full md:w-[80%] px-2 lg:w-full  xl:w-[80%] lg:px-5    max-lg:flex-col max-lg:gap-[24px]  py-12 flex">
                <div className="lg:flex-1 mx-auto  bg-[#ECEFFF] border-[#9DAEEA]  border rounded-[20px] py-[30px] px-5 md:px-[68px]">
                    <Payment />
                </div>
                <div>
                    <div className="lg:flex-1 px-5 lg:px-[68px] bg-secondary-darkBlue max-md:hidden  py-[30px] rounded-[30px]">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
