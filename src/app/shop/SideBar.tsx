import CheckBox from "@/components/CheckBox";
import Image from "next/image";
import React from "react";

const SideBar = ({
    sm,
    setHidden,
}: {
    sm?: boolean;
    setHidden?: (a: boolean) => any;
}) => {
    const handleSrtHidden = () => {
        setHidden && setHidden(false);
    };
    return (
        <div
            className={
                sm
                    ? "fixed  h-[60vh] overflow-y-auto shadow z-[99] top-[4rem] left-[17%] flex-[2] space-y-[41px] border-[2px] p-[20px] rounded-[20px] bg-white border-[#D7D7D7]"
                    : "flex-[2] space-y-[41px] border-[2px] p-[20px] rounded-[20px] bg-white border-[#D7D7D7]"
            }
        >
            <div className="space-y-[10px]">
                {sm && (
                    <div className="flex justify-center w-full">
                        <Image
                            onClick={handleSrtHidden}
                            src={"/multiplication-sign.svg"}
                            width={27}
                            height={27}
                            alt=""
                        />
                    </div>
                )}
                <h1 className="text-[24px] font-medium">Filters</h1>
                <div className="space-y-[6px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox defaultValue />
                            <p>All</p>
                        </div>
                        <span>150</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
                            <p>Male Shoes</p>
                        </div>
                        <span>50</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
                            <p>Female Shoes</p>
                        </div>
                        <span>50</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
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
                            <CheckBox defaultValue />
                            <p>6-20</p>
                        </div>
                        <span>20</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
                            <p>21-30</p>
                        </div>
                        <span>50</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
                            <p>31-40</p>
                        </div>
                        <span>40</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
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
                            <CheckBox />
                            <p>Nike</p>
                        </div>
                        <span>120</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
                            <p>Puma</p>
                        </div>
                        <span>03</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
                            <p>K-Swiss</p>
                        </div>
                        <span>01</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-[8px]">
                            <CheckBox />
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
