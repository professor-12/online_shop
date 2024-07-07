import Image from "next/image";
import React from "react";
import Products from "./Products";

const Shop = () => {
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
                <Products />
            </div>

            <div className="mx-auto flex gap-3 p-3 justify-center">
                <button className="border border-secondary-darkBlue px-[6px]  rounded-lg">
                    Previous
                </button>
                <button className="border bg-secondary-darkBlue text-white border-secondary-darkBlue h-[29px] w-[29px] rounded-lg">
                    1
                </button>
                <button className="border border-secondary-darkBlue  h-[29px] w-[29px] rounded-lg">
                    2
                </button>
                <button className="border border-secondary-darkBlue  h-[29px] w-[29px] rounded-lg">
                    3
                </button>
                <button className="border max-md:hiddden border-secondary-darkBlue  h-[29px] w-[29px] rounded-lg">
                    4
                </button>
                <button className="border max-md:hidden border-secondary-darkBlue  h-[29px] w-[29px] rounded-lg">
                    5
                </button>
                <button className="border border-secondary-darkBlue  h-[29px] w-[29px] rounded-lg">
                    6
                </button>
                <button className="border border-secondary-darkBlue  h-[29px] px-[5px] rounded-lg">
                    next
                </button>
            </div>
        </div>
    );
};

export default Shop;
