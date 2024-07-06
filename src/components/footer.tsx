import React from "react";
import { Logo } from "./UI/Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#151414] py-[10px]">
            <div className="wrapper flex  max-md:gap-[26px] flex-col md:flex-row text-white justify-center items-center md:justify-between mx-auto">
                <Logo />
                <div className="md:space-x-[50px] gap-[33px]  font-[600] max-md:text-[18px] flex items-center text-[20px]">
                    <Link href={"/"}>HOME</Link>
                    <Link href={"/"}>SHOP</Link>
                    <Link href={"/"}>SALES</Link>
                </div>
                <div className="flex gap-[13px] items-center">
                    <Image
                        alt="search_button"
                        src={"/instagram.svg"}
                        width={20}
                        height={20}
                    />
                    <Image
                        alt="cart_img"
                        src={"/twitter.svg"}
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
