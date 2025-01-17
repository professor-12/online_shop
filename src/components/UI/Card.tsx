import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
    width = "209",
    height = "255",
    shop,
    name,
    path,
    price,
    quantity,
    fakeprice,
    className,
}: {
    width?: string;
    height?: string;
    shop?: boolean;
    name: string;
    path: string;
    price: number | string;
    fakeprice?: string;
    quantity?: number;
    className?: string;
}) => {
    const Style = !shop
        ? { minWidth: `${width}px`, minHeight: `${height}px` }
        : { maxWidth: "275px" };

    return (
        <div
            style={Style}
            className={`bg-white rounded-[10px]  space-y-[10px] p-[10px]`}
        >
            <div className="bg-secondary-purple h-[150px] items-baseline  rounded-[10px] relative">
                {!shop && (
                    <div className="h-[66.28px] text-center  rounded-b-[20px] left-2  text-white top-[0px] py-[2px] w-[19px] absolute bg-black">
                        <p className="text-[14px] text-center rotate-[90deg]">
                            SALES
                        </p>
                    </div>
                )}
                <div className="pt-8 flex justify-center">
                    <Image
                        src={path ?? "/unsplash_t1sTHYjSN10.png"}
                        width={166}
                        height={124}
                        alt=""
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="space-y-[4px] md:space-y-[6px] relative">
                <h1 className="font-semibold text-[14px] md:text-[18px]">
                    {name}
                </h1>
                {shop && (
                    <Link href="/cart">
                        <div>
                            <Image
                                className="absolute -right-[23px] max-md:-top-20 top-2"
                                src={"/Group 16 (3).svg"}
                                height={30}
                                width={30}
                                alt="add-to-cart"
                            />
                        </div>
                    </Link>
                )}
                <p className="font-semibold flex items-center space-x-2 text-[14px] text-xs">
                    {" "}
                    <span className="max-h-[7px]  rounded-full max-w-[7px] p-1 bg-secondary-darkBlue" />
                    <span className="text-gray">{quantity} items left</span>
                </p>
                <div className="flex items-center gap-[2px] md:gap-[5px] text-nowrap">
                    <p
                        className={`font-semibold line-through text-[#646464] md:text-[14px] text-sm ${
                            shop ? "max-sm:hidden" : ""
                        }`}
                    >
                        {fakeprice && "$" + fakeprice}
                    </p>
                    <p className="font-semibold text-[#151414] relative md:text-sm">
                        ${price}{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
