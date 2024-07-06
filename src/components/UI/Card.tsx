import Image from "next/image";
import React from "react";

const Card = () => {
    return (
        <div className="w-[209px]  space-y-[10px] p-[10px] h-[255px]">
            <div className="bg-secondary-purple h-[150px] items-baseline  rounded-[10px] relative">
                <div className="h-[66.28px] text-center  rounded-b-[20px] left-6  text-white top-[0px] py-[2px] w-[19px] absolute bg-black">
                    <p className="text-[14px] text-center rotate-[90deg]">
                        SALES
                    </p>
                </div>
                <div className="h-[150px] place-items-baseline  self-baseline flex align-baseline">
                    <Image
                        src={"/unsplash_s-gYAbQToXk (1).png"}
                        width={166}
                        height={124}
                        alt=""
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="space-y-[6px]">
                <h1 className="font-semibold text-[18px]">K-swiss Heels 11</h1>
                <p className="font-semibold flex items-center space-x-2 text-[14px] text-xs">
                    {" "}
                    <span className="max-h-[7px]  rounded-full max-w-[7px] p-1 bg-[#D7D7D7]" />
                    <span className="text-gray">5 items left</span>
                </p>
                <div className="flex items-center gap-[6px] text-nowrap">
                    <p className="font-semibold text-[#646464] text-[14px]">
                        #290,000
                    </p>
                    <p className="font-semibold text-[#151414] relative">
                        #200,000{" "}
                        <span className="absolute top-0 text-xs">00</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
