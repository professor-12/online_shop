import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <section className="xl:h-[631px] xl:p-[50px] wrapper flex max-md:flex-col items-center">
            <div className="pt-[50px] space-y-[39px]">
                <div className="space-y-[15px]">
                    <p className="md:text-[20px] text-secondary-darkBlue font-[500]">
                        Step Lightly
                    </p>
                    <h2 className="text-[50px] xl:w-[603px] font-[600] leading-[60px]">
                        Nice Shoes that Reflect <br /> Your Personality
                    </h2>
                    <p className="xl:text-[20px] leading-[29px] text-left font-[400] xl:w-[531px]">
                        Step lightly: sustainable footwear for every
                        step.Discover stylish and comfortable shoes
                    </p>
                </div>
                <button className="xl:w-[215px] text-white bg-secondary-darkBlue rounded-[20px] xl:p-[5px] xl:h-[61px] flex justify-between items-center">
                    <div className="flex  gap-[30px]  mx-auto items-center">
                        <p className="text-[20px] leading-[24px]">Shop now</p>

                        <Image
                            className="flex self-center pt-2"
                            src={"/circle-arrow-right-double-sharp.svg"}
                            width={49.02}
                            height={48}
                            alt="Shop_now_button"
                        />
                    </div>
                </button>
            </div>
            <Image
                className="object-contain"
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
