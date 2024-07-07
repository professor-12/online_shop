import Image from "next/image";
import React from "react";

const SustainableSection = () => {
    return (
        <div className="bg-black py-[10px] text-white my-[66px]">
            <div className="mx-auto p-10 md:w-[80%] lg:w-[70%] flex-col lg:flex-row gap-[54px] flex items-center justify-between">
                <div className="space-y-[39px]">
                    <h1 className="md:text-4xl xl:text-[36px] text-2xl max-lg:text-center md:leading-[48px] font-semibold text-nowrap">
                        Sustainable Footwear for <br className="max-md:hdden" />{" "}
                        Every Step
                    </h1>
                    <button className="text-black max-md:px-2  p-2 px-4 bg-white rounded-[20px]  flex justify-between max-lg:mx-auto items-center">
                        <div className="flex gap-[30px]   mx-auto items-center">
                            <p className="md:text-[20px] font-medium text-[18px]">
                                Shop now
                            </p>

                            <Image
                                className="flex-1"
                                src={"/elements.svg"}
                                width={49.02}
                                height={48}
                                alt="Shop_now_button"
                            />
                        </div>
                    </button>
                </div>
                <div>
                    <Image
                        className=""
                        width={563}
                        height={277}
                        alt="reactangle shoe image"
                        src={"/Rectangle 7.png"}
                    />
                </div>
            </div>
        </div>
    );
};

export default SustainableSection;
