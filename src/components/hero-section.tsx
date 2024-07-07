"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const HeroSection = () => {
    const a = useRouter()
    return (
        <section className="xl:h-[631px] overflow-hidden  max-md:space-y-8 md:py-[50px] wrapper flex max-md:flex-col items-center">
            <div className="pt-[50px]  md:text-left text-center space-y-[39px]">
                <div className="space-y-[15px]">
                    <p className="md:text-[20px] text-[16px] text-secondary-darkBlue font-[500]">
                        Step Lightly
                    </p>
                    <h2 className="md:text-[40px]  text-[30px] xl:w-[603px] font-[600] leading-[36px] lg:leading-[60px]">
                        Nice Shoes that Reflect <br /> Your Personality
                    </h2>
                    <p className="xl:text-[20px] text-center leading-[29px] md:text-left font-[400] xl:w-[531px]">
                        Step lightly: sustainable footwear for every
                        step.Discover stylish and comfortable shoes
                    </p>
                </div>
                <button className=" text-white bg-secondary-darkBlue rounded-[20px] p-3 px-4  flex justify-between max-md:mx-auto items-center">
                    <div onClick={() => a.push("/shop")} className="flex gap-[30px]   mx-auto items-center">
                        <p className="md:text-[20px] text-[18px]">Shop now</p>
                        <Image
                            className=""
                            src={"/elements (1).svg"}
                            width={49.02}
                            height={48}
                            alt="Shop_now_button"
                        />
                    </div>
                </button>
            </div>
            <Image
                className="md:w-[45%]"
                src={"/Hero images.png"}
                alt="Hero Image"
                width={652.85}
                height={546}
            />
        </section>
    );
};
// width: Fixed (689px)px;
// height: Hug (334px)px;
// gap: 39px;
// opacity: 0px;

export default HeroSection;

// width: Fixed (1,512px)px;
// height: Fixed (79px)px;
// padding: 10px 0px 10px 0px;
// gap: 327px;
// opacity: 0px;
