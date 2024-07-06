import React from "react";
import Carousel from "./carousel";

const SlideShow = () => {
    return (
        <div className="bg-white overflow-hidden   my-[66px] space-y-4 wrapper rounded-[20px] md:p-[30px] p-[10px] md:px-[20px]">
            <div className="flex gap-x-3 justify-between items-center">
                <h1 className="text-black tracking-tighter font-semibold text-[20px] md:text-[36px]">
                    Today Best Deals!
                </h1>
                <div className="gradient_button max-md:flex-1   text-[12px] md:text-[16px] font-medium text-white text-center flex items-center justify-center">
                    <span className="max-md:text-xs text-nowrap">
                        Ends in: 12h: 10m: 10s
                    </span>
                </div>
            </div>
            <Carousel />
        </div>
    );
};

export default SlideShow;
