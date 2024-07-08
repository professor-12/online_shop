"use client";
import Image from "next/image";
import React, { useState } from "react";
import Products from "./Products";

const Sales = () => {
    const [page, setPage] = useState(1);
    return (
        <div>
            <div>
                <div className="bg-secondary-darkBlue px-3 text-white lg:gap-[104px] pt-4 max-md:text-center md:items-center max-md:flex-col flex justify-center min-h-[345px]">
                    <h1 className="font-semibold text-3xl lg:text-[50px] lg:leading-[60px]  md:text-[36px]">
                        Get a Free Gift <br className="max-md:hidden" /> Off
                        Every Order
                    </h1>
                    <div>
                        <Image
                            src="/Hero-shop.png"
                            width={345}
                            height={247}
                            alt=""
                        />
                    </div>
                </div>
                <div className="space-y-10 my-[50px]">
                    <div className="xl:w-[70%]  px-3 max-md:justify-between justify-end max-md:flex-row-reverse xl:px-0 lg:px-6 mx-auto flex">
                        <button className="bg-secondary-darkBlue md:hidden  flex gap-4  text-white p-3 px-4 rounded-md">
                            <span className="txt-white">Filter</span>{" "}
                            <Image
                                src="/Filter.svg"
                                width={20}
                                alt={"sd"}
                                height={20}
                            />
                        </button>
                        <button className="sales_gradient  p-[10px] rounded-[10px]">
                            <span className="text-white  flex ml-[auto] text-center font-semibold">
                                Ends in: 12h: 10m: 10s
                            </span>
                        </button>
                    </div>
                    <Products />
                </div>
            </div>
            <div className="mx-auto flex gap-3 p-3 justify-center">
                <button
                    onClick={() => {
                        if (page <= 1) {
                            return;
                        }
                        setPage((prev) => prev - 1);
                    }}
                    className="border border-secondary-darkBlue px-[6px]  rounded-lg"
                >
                    Previous
                </button>
                {new Array(6).fill(null).map((_, indx) => {
                    const active = indx + 1 === page;
                    return (
                        <button
                            key={indx}
                            onClick={() => setPage(indx + 1)}
                            className={`border ${
                                indx >= 4 && "max-md:hidden"
                            } ${
                                active
                                    ? "bg-secondary-darkBlue text-white"
                                    : "text-black"
                            }  border-secondary-darkBlue h-[29px] w-[29px] rounded-lg`}
                        >
                            {indx + 1}
                        </button>
                    );
                })}

                <button
                    onClick={() => {
                        if (page >= 6) {
                            return;
                        }
                        setPage((prev) => prev + 1);
                    }}
                    className="border border-secondary-darkBlue  h-[29px] px-[5px] rounded-lg"
                >
                    next
                </button>
            </div>
        </div>
    );
};

export default Sales;
