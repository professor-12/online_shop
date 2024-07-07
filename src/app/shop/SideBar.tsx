import Image from "next/image";
import React from "react";

const SideBar = () => {
    return (
        <div className="flex-1 space-y-[41px] border-[2px] p-[20px] rounded-[20px] border-secondary-darkBlue">
            <div className="space-y-[10px]">
                <h1 className="text-[24px] font-medium">Filters</h1>
                <div className="space-y-[6px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02.svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>All</p>
                        </div>
                        <span>150</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02 (1).svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>Male Shoes</p>
                        </div>
                        <span>50</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02 (1).svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>Female Shoes</p>
                        </div>
                        <span>50</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02.svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>Children Shoes</p>
                        </div>
                        <span>50</span>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-[24px] font-medium">Price</h1>
                <Image
                    src="/Group 1716.png"
                    className="w-full"
                    alt=""
                    width={215}
                    height={76}
                />
                <span className="text-[14px]">Range: #30,000 - #500,000</span>
            </div>
            <div className="space-y-[10px]">
                <h1 className="text-[24px] font-medium">Size</h1>
                <div className="space-y-[6px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02.svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>6-20</p>
                        </div>
                        <span>20</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02 (1).svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>21-30</p>
                        </div>
                        <span>50</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02 (1).svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>31-40</p>
                        </div>
                        <span>40</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02.svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>41-50</p>
                        </div>
                        <span>40</span>
                    </div>
                </div>
            </div>
            <div className="space-y-[10px]">
                <h1 className="text-[24px] font-medium">Brands</h1>
                <div className="space-y-[6px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02.svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>Nike</p>
                        </div>
                        <span>120</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02 (1).svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>Puma</p>
                        </div>
                        <span>03</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02 (1).svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>K-Swiss</p>
                        </div>
                        <span>01</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <Image
                                className="cursor-pointer"
                                src="/checkmark-square-02.svg"
                                width={30}
                                height={30}
                                alt="checkMark"
                            />
                            <p>Encap</p>
                        </div>
                        <span>01</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
