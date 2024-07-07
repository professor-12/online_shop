import React from "react";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";

const page = () => {
    return (
        <div className="mx-auto w-full md:w-[80%]  lg:w-full  xl:w-[80%] lg:px-5 px-2   max-lg:flex-col gap-[24px]  py-12 flex">
            <div className="lg:flex-1 px-5 lg:px-[68px] bg-secondary-darkBlue max-md:hidden  py-[30px] rounded-[30px]">
                <OrderSummary />
            </div>
            <div className="lg:flex-1 mx-auto  bg-[#ECEFFF] border-[#9DAEEA]  border rounded-[20px] py-[30px] px-5 md:px-[68px]">
                <Payment />
            </div>
        </div>
    );
};

export default page;
