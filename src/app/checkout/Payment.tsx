import { InputWrapper } from "@/components/Form/input";
import Image from "next/image";
import React from "react";

const Payment = () => {
    return (
        <div className="space-y-[26px]">
            <div className="space-y-[12px]">
                <h1 className="font-semibold text-[24px]">Payment Details</h1>
                <p className="text-[18px]">
                    Ready to checkout? Enter your payment information to secure
                    your order.
                </p>
            </div>
            <div className="space-y-[12px]">
                <InputWrapper
                    label="Full Name"
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
                    label="Shipping Address"
                    placeholder="Enter shipping address"
                >
                    <Image
                        src="/location-06.svg"
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
            <div className="space-y-[21px]">
                <h1 className="text-[20px] font-semibold">Card Details</h1>
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
                <div className="flex gap-[12px]">
                    <InputWrapper
                        label="Expiration Date"
                        placeholder="MM/YY"
                    ></InputWrapper>
                    <InputWrapper label="CVC" placeholder="305"></InputWrapper>
                </div>
            </div>
            <button className="bg-secondary-darkBlue w-full p-[10px] text-center text-[20px] text-white rounded-[10px]">
                Pay #51000
            </button>
        </div>
    );
};

export default Payment;
