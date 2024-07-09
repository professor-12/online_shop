"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./UI/Card";
import { bestDealData } from "@/lib/dummy_data";
import Image from "next/image";

const Carousel = () => {
    const parentRef = useRef<any>();
    const [x, setX] = useState(0);

    const handleScrollLeft = () => {
        if (x <= 0) return;
        setX((prev) => prev - 200);
    };

    const handleScrollRight = () => {
        if (x >= 200 * 8) return;
        setX((prev) => prev + 200);
    };

    return (
        <div ref={parentRef} className="w-full relative">
            <Image
                onClick={handleScrollRight}
                className="absolute flex self-center cursor-pointer right-0 top-[calc(40%-24px)] z-[111]"
                src={"/elements (1).svg"}
                width={48}
                alt=""
                height={48}
            />
            <Image
                onClick={handleScrollLeft}
                src={"/elements.svg"}
                className="rotate-180 cursor-pointer top-[calc(40%-24px)] absolute z-[111]"
                width={48}
                alt=""
                height={48}
            />

            <div
                className="w-full transition-all duration-700
            "
                style={{ transform: `translateX(-${x}px)` }}
            >
                <div
                    onClick={(e) => console.log(e)}
                    className="grid  w-ful grid-flow-col gap-[30px]"
                >
                    {bestDealData.map(
                        ({ fake, name, path, price, quantity }) => {
                            return (
                                <Card
                                    className=""
                                    key={path}
                                    fakeprice={fake}
                                    name={name}
                                    quantity={quantity}
                                    path={path}
                                    price={price}
                                />
                            );
                        }
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default Carousel;
