"use client";
import React, { useEffect, useRef, useState } from "react";
import Card from "./UI/Card";
import { bestDealData } from "@/lib/dummy_data";
import Image from "next/image";

const Carousel = () => {
    const targetRef = useRef<any>();
    const [x, setX] = useState(0);
    const ts = false;
    useEffect(() => {
        const timefunc = setInterval(() => {
            setX((prev) => prev + 100);
        }, 2000);

        if (ts) {
            clearInterval(timefunc);
        }

        return () => {
            clearInterval(timefunc);
        };
    }, [ts]);
    useEffect(() => {
        const observerCallback = (entries: any, observer: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    setX(0);
                } else {
                    console.log("Element is out of view");
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: "-12px",
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        const targetElement = targetRef.current;
        if (targetElement) {
            observer.observe(targetElement);
        }

        return () => {
            if (targetElement) {
                observer.unobserve(targetElement);
            }
        };
    }, []);

    const handleScrollLeft = () => {
        setX((prev) => prev - 200);
    };

    const handleScrollRight = () => {
        if (x == 0) return;
        setX((prev) => prev + 200);
    };

    return (
        <div className="w-full relative">
            <Image
                onClick={handleScrollRight}
                className="absolute cursor-pointer right-0 top-[40%] z-[111]"
                src={"/elements (1).svg"}
                width={48}
                alt=""
                height={48}
            />
            <Image
                onClick={handleScrollLeft}
                src={"/elements.svg"}
                className="rotate-180 cursor-pointer top-[40%] absolute z-[111]"
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
                                    name={name}
                                    path={path}
                                    price={price}
                                />
                            );
                        }
                    )}
                    <div ref={targetRef}></div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
