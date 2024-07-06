import Image from "next/image";
import React from "react";

const SneakerSpeak = () => {
    return (
        <div className="overflow-x-hidden wrapper space-y-[29px] mb-[66px]">
            <h1 className="text-[20px] md:text-[36px] font-semibold text-center gap-[29px]">
                Sneaker Speak
            </h1>
            <div className="grid w-full gap-[28px] grid-flow-col  md:-translate-x-[200px]">
                <div className="bg-white space-y-[26px]  w-[554px] py-[20px] rounded-[10px]">
                    <div className="space-y-[17px] flex flex-col items-center">
                        <div className="space-x-[12px] w-fit flex items-center">
                            {new Array(5).fill(null).map((_, indx) => {
                                return (
                                    <Image
                                        key={indx}
                                        src={"/Star 1.svg"}
                                        width={15}
                                        height={15}
                                        alt="star rating"
                                    />
                                );
                            })}
                        </div>
                        <p className="text-center text-[18px] leading-[26px]">
                            Perfect blend of fashion and function. Excellent
                            customer service and fast delivery. Highly
                            recommend!&quot;
                        </p>
                    </div>
                    <div className="text-center text-[18px] space-y-[4px]">
                        <p className="font-semibold">@Emmanuel</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="bg-white space-y-[26px]  w-[554px] py-[20px] rounded-[10px]">
                    <div className="space-y-[17px] flex flex-col items-center">
                        <div className="space-x-[12px] w-fit flex items-center">
                            {new Array(5).fill(null).map((_, indx) => {
                                return (
                                    <Image
                                        key={indx}
                                        src={"/Star 1.svg"}
                                        width={15}
                                        height={15}
                                        alt="star rating"
                                    />
                                );
                            })}
                        </div>
                        <p className="text-center text-[18px] leading-[26px]">
                            Perfect blend of fashion and function. Excellent
                            customer service and fast delivery. Highly
                            recommend!&quot;
                        </p>
                    </div>
                    <div className="text-center text-[18px] space-y-[4px]">
                        <p className="font-semibold">@Emmanuel</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="bg-white space-y-[26px]  w-[554px] py-[20px] rounded-[10px]">
                    <div className="space-y-[17px] flex flex-col items-center">
                        <div className="space-x-[12px] w-fit flex items-center">
                            {new Array(5).fill(null).map((_, indx) => {
                                return (
                                    <Image
                                        key={indx}
                                        src={"/Star 1.svg"}
                                        width={15}
                                        height={15}
                                        alt="star rating"
                                    />
                                );
                            })}
                        </div>
                        <p className="text-center text-[18px] leading-[26px]">
                            Perfect blend of fashion and function. Excellent
                            customer service and fast delivery. Highly
                            recommend!&quot;
                        </p>
                    </div>
                    <div className="text-center text-[18px] space-y-[4px]">
                        <p className="font-semibold">@Emmanuel</p>
                        <p>Lagos, Nigeria</p>
                    </div>
                </div>
            </div>
            <div className="gap-3 flex justify-center">
                {Array(5)
                    .fill(null)
                    .map((_, i) => {
                        return (
                            <span
                                className={`h-[15px] w-[15px] rounded-full ${
                                    i === 2
                                        ? "bg-secondary-darkBlue"
                                        : "bg-white"
                                }`}
                                key={i}
                            ></span>
                        );
                    })}
            </div>
        </div>
    );
};
// font-family: Inter;
// font-size: 18px;
// font-weight: 400;
// line-height: 26px;
// text-align: center;

export default SneakerSpeak;
