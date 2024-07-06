import React from "react";
import Carousel from "./carousel";

const SlideShow = () => {
    return (
        <div className="bg-white overflow-hidden h-[395px] my-[66px] space-y-4 wrapper rounded-[20px] p-[30px] px-[20px]">
            <div className="flex justify-between items-center">
                <h1 className="text-black font-semibold text-[36px]">
                    Today Best Deals!
                </h1>
                <div className="gradient_button text-[16px] font-medium text-white text-center">
                    Ends in: 12h: 10m: 10s
                </div>
            </div>
            <Carousel />
        </div>
    );
};

export default SlideShow;
