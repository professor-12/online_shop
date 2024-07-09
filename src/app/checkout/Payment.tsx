import CheckBox from "@/components/CheckBox";
import { InputWrapper } from "@/components/Form/input";
import Image from "next/image";
import React from "react";

const Payment = () => {
    return (
        <div className="space-y-[26px]">
            <div className="md:space-y-[12px]">
                <h1 className="font-semibold text-[24px]">Payment Details</h1>
                <p className="text-sm md:text-[18px]">
                    Ready to checkout? Enter your payment information to secure
                    your order.
                </p>
            </div>
            <div className="space-y-[12px]">
                <p className="text-sm md:text-[20px] font-semibold">
                    Shipping Information
                </p>
                <div className="flex max-md:space-y-[21px] max-md:flex-col justify-between gap-4">
                    <InputWrapper
                        label="First Name"
                        placeholder="Enter your full name"
                    >
                        <Image
                            src="/notification-bubble.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </InputWrapper>
                    <InputWrapper
                        label="Last Name"
                        placeholder="Enter your Last name"
                    >
                        <Image
                            src="/notification-bubble.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </InputWrapper>
                </div>
                <div className="flex max-md:space-y-[21px] max-md:flex-col justify-between gap-4">
                    <InputWrapper
                        label="Email Address"
                        placeholder="Enter your email address"
                    >
                        <Image
                            src="/mail-open-01.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </InputWrapper>
                    <InputWrapper
                        label="Phone Number"
                        placeholder="Enter your phone number"
                    >
                        <Image src="/call.svg" width={18} height={18} alt="" />
                    </InputWrapper>
                </div>
                <InputWrapper
                    textArea
                    label="Shipping Address"
                    placeholder="Enter shipping address"
                >
                    <div className="pt-3">
                        <Image
                            src="/location-06.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </div>
                </InputWrapper>

                <div className="md:flex gap-4 justify-between  items-center">
                    <div className="flex-1">
                        <label className="md:text-[18px] font-[500]">
                            State
                        </label>
                        <select
                            name=""
                            id=""
                            className="bg-transparent focus:outline-none  w-full border p-[7px] rounded-md px-2 border-[#646464]"
                        >
                            <option
                                className="bg-transparent focus:outline-none  w-full"
                                value=""
                            >
                                Lagos
                            </option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="md:text-[18px] font-[500]" htmlFor="">
                            City
                        </label>
                        <select
                            name=""
                            id=""
                            className="bg-transparent focus:outline-none  w-full border p-[7px] rounded-md px-2 border-[#646464]"
                        >
                            <option
                                className="bg-transparent focus:outline-none"
                                value=""
                            >
                                Lagos
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="space-y-[21px]">
                <h1 className="text-[20px] font-semibold">Payment method</h1>
                <div className="md:gap-[40px] flex">
                    <div className="flex gap-[5px]">
                        <CheckBox />
                        <Image
                            alt="/visa (1).svg"
                            width={30}
                            height={19}
                            src="/visa.svg"
                        />
                    </div>
                    <div className="flex gap-[5px]">
                        <CheckBox />
                        <Image
                            alt="/visa.svg"
                            width={30}
                            height={19}
                            src="/mastercard.svg"
                        />
                    </div>
                    <div className="flex gap-[5px]">
                        <CheckBox />
                        <Image
                            alt="/visa (1).svg"
                            width={30}
                            height={19}
                            src="/paypal.svg"
                        />
                    </div>
                </div>
                <div className="flex max-md:space-y-[21px] max-md:flex-col justify-between gap-4">
                    <InputWrapper
                        label="Card Number"
                        placeholder="Enter card number"
                    >
                        <Image
                            src="/credit-card.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </InputWrapper>
                    <InputWrapper
                        label="Card Holder’s Name"
                        placeholder="Enter the card holder’s name"
                    >
                        <Image
                            src="/credit-card.svg"
                            width={18}
                            height={18}
                            alt=""
                        />
                    </InputWrapper>
                </div>

                <div className="flex max-md:flex-col justify-between gap-4">
                    <InputWrapper
                        label="Expiration Date"
                        placeholder="MM/YY"
                    ></InputWrapper>
                    <InputWrapper label="CVC" placeholder="305"></InputWrapper>
                </div>
                <button className="bg-secondary-darkBlue w-full p-[10px] text-center text-[20px] text-white rounded-[10px]">
                    Pay $51000
                </button>
            </div>
        </div>
    );
};

export default Payment;
