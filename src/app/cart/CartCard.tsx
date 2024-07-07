import Image from "next/image";
import React from "react";

const CartCard = () => {
    return (
        <div className="border-[2px] max-md:space-y-[17px] p-[20px] max-md:flex-col rounded-[10px] border-secondary-darkBlue flex justify-between">
            <div className="flex gap-[11px]">
                <div className="h-full flex items-center bg-[#9DAEEA] rounded-lg">
                    <Image
                        alt=""
                        src="/unsplash_fUEP0djb1hA.png"
                        width={98}
                        height={75}
                    />
                </div>
                <div className="space-y-[16px]">
                    <div>
                        <h1 className="font-semibold text-[18px]">
                            Nike-Puma Sneakers
                        </h1>
                        <p className="text-[#646464] text-[14px] font-medium">
                            Black lasted edition
                        </p>
                    </div>
                    <div className="flex gap-[6px]">
                        <div>
                            <label htmlFor="sizze" className="font-semibold">
                                Size:{" "}
                            </label>
                            <select
                                name="sizze"
                                id="sizze"
                                className="bg-inherit border rounded-md px-2"
                            >
                                <option value="">20-30l</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="sizze" className="font-semibold">
                                Quantity:{" "}
                            </label>
                            <select
                                name="sizze"
                                id="sizze"
                                className="bg-inherit border rounded-md px-2"
                            >
                                <option value="">1</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex  md:flex-col items-center justify-between">
                <h1 className="font-semibold text-[18px]">#40,000</h1>
                <Image
                    src={"/trash.svg"}
                    width={12 * 2}
                    height={12 * 2}
                    className="cursor-pointer mx-auto"
                    alt="delete icon"
                />
            </div>
        </div>
    );
};

export default CartCard;
