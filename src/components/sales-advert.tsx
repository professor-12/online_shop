import Image from "next/image";
import React from "react";

const SalesAdvert = () => {
    return (
        <div className="h-[124px] overflow-x-hidden text-white py-[10px] flex items-center bg-secondary-darkBlue">
            <div className="justify-between wrapper  px-4  mx-auto flex items-center">
                <div className="md:space-x-[17px] justify-between flex items-center">
                    <Image
                        className="max-md:h-[15px] max-md:w-[15px]"
                        src={"/truck.svg"}
                        width={45}
                        height={45}
                        alt="truck image"
                    />
                    <div className="space-y-[4px]">
                        <p className="text-[14px] md:text-[20px]">
                            FAST & FREE SHIPPING
                        </p>
                        <p className="text-[12px] md:text-[18px] text-[#FBF6F6]">
                            On over #10,000 worth
                        </p>
                    </div>
                </div>
                <div className="md:space-x-[17px] justify-between  relative flex items-center">
                    <Image
                        className="max-md:h-[15px] max-md:w-[15px]"
                        src={"/Group 12.svg"}
                        alt="dollar"
                        width={45}
                        height={45}
                    />
                    <div className="space-y-[4px]">
                        <p className="text-[14px] md:text-[20px]">
                            SAVE 20% OF EVERY ORDER
                        </p>
                        <p className="text-[12px] md:text-[18px] text-[#FBF6F6]">
                            On over #10,000 worth
                        </p>
                    </div>
                </div>
                <div className="md:space-x-[17px] flex-wrap justify-between  relative flex items-center">
                    <Image
                        className="max-md:h-[15px] max-md:w-[15px]"
                        src={"/gift.svg"}
                        width={45}
                        height={45}
                        alt="gift image"
                    />
                    <div className="space-y-[4px]">
                        <p className="text-[14px] md:text-[20px]">
                            GET FREE GIFT OFF EVERY ORDER
                        </p>
                        <p className="text-[12px] md:text-[18px] text-[#FBF6F6]">
                            On over #10,000 worth
                        </p>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default SalesAdvert;
