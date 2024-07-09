"use client";
import Image from "next/image";
import React, { useState } from "react";
import Products from "./Products";
import PaginationButton from "@/components/PaginationButton";

const Sales = () => {
    const [hideSideBar, setHideSideBar] = useState(true);
    return (
        <div>
            <div>
                <div className="bg-secondary-darkBlue px-3 text-white lg:gap-[104px] pt-4 max-md:text-center md:items-center relative max-md:flex-col flex justify-center min-h-[345px]">
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
                <div className="space-y-10 relative my-[50px]">
                    <div className="xl:w-[80%]  px-3 max-md:justify-between justify-end max-md:flex-row-reverse xl:px-0 lg:px-6 mx-auto flex">
                        <button
                            onClick={() => setHideSideBar((prev) => !prev)}
                            className="bg-secondary-darkBlue lg:hidden hover:bg-[#CED7F4]   flex gap-4  text-white p-3 px-4 rounded-md"
                        >
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
                    <Products hidden={hideSideBar} setHidden={setHideSideBar} />
                    <PaginationButton />
                </div>
            </div>
        </div>
    );
};

export default Sales;
