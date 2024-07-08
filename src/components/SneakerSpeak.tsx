"use client";
import Image from "next/image";
import React, { useState } from "react";

const SneakerSpeak = () => {
    const [selected, setSelected] = useState(0);
    const [x, setX] = useState(0);
    const List = new Array(3).fill(null);

    const position = x * 300;

    return (
        <div className="overflow-x-hidden max-md:px-3 mx-auto xl:w-[88%] space-y-[29px] mb-[66px]">
            <h1 className="text-[20px] md:text-[36px] font-semibold text-center">
                Sneaker Speak
            </h1>
            <div
                style={{ transform: `translateX(-${position}px)` }}
                className="max-lg:hidden grid max-l:hidden transition-all duration-500  max-lg:pl-6  xl:px-12 w-full place-items-center gap-[28px] grid-flow-col"
            >
                {List.map((e, indx) => (
                    <div
                        onClick={() => setX(indx)}
                        key={indx}
                        style={{
                            transform: `scale(${indx == x ? "1.05" : "1"})`,
                        }}
                        className={`bg-white  ${
                            indx == x && "shadow-lg shadow-[#cfbeaf80]"
                        } transition-all duration-500 space-y-[26px] w-[554px] cursor-pointer py-[20px] rounded-[10px]`}
                    >
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
                ))}
            </div>
            {List.filter((_, indx) => indx == x).map((_, indx) => (
                <div
                    key={indx}
                    className={`bg-white lg:hidden mx-auto transition-all duration-500 space-y-[26px] w-full md:w-[554px] py-[40px] rounded-[10px]`}
                >
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
                        <p className="text-center  md:text-[18px] md:leading-[26px]">
                            Perfect blend of fashion and function. Excellent
                            customer service and fast delivery. Highly
                            recommend!&quot;
                        </p>
                    </div>
                    <div className="text-center md:text-[18px] md:space-y-[4px]">
                        <p className="font-semibold">@Emmanuel</p>
                        <p className="max-md:text-sm">Lagos, Nigeria</p>
                    </div>
                </div>
            ))}

            <div className="gap-3 flex justify-center">
                {List.map((_, i) => {
                    return (
                        <span
                            onClick={() => setX(i)}
                            className={`h-[15px] cursor-pointer w-[15px] rounded-full ${
                                i === x ? "bg-secondary-darkBlue" : "bg-white"
                            }`}
                            key={i}
                        ></span>
                    );
                })}
            </div>
        </div>
    );
};

export default SneakerSpeak;
