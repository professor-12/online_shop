import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Logo } from "./UI/Logo";
const NavBar = () => {
    return (
        <div className="w-full py-[10px] flex items-center  text-white px-2 h-[79px] bg-secondary-darkBlue">
            <nav className="wrapper max-md:hidden mx-auto flex item-center justify-between">
                <Logo />
                <div className="md:space-x-[50px] font-[600] max-lg:sm flex items-center text-[20px]">
                    <Link href={"/"}>HOME</Link>
                    <Link href={"/"}>SHOP</Link>
                    <Link href={"/"}>SALES</Link>
                </div>
                <div className="flex gap-[13px] items-center">
                    <Image
                        alt="search_button"
                        src={"/search.svg"}
                        width={20}
                        height={20}
                    />
                    <Image
                        alt="cart_img"
                        src={"/uil_cart.svg"}
                        width={20}
                        height={20}
                    />
                </div>
            </nav>
            {/* Mobile Nav Bar */}
            <nav className="wrapper flex items-center md:hidden justify-between text-white">
                <div className="flex space-y-1 cursor-pointer flex-col">
                    <span className="bg-white w-[2rem]   h-[3px]  rounded-md"></span>
                    <span className="bg-white w-[2rem]    h-[3px]  rounded-md"></span>
                    <span className="bg-white w-[2rem]    h-[3px] rounded-md"></span>
                </div>
                <Logo />
                <div className="flex gap-[13px] items-center">
                    <Image
                        className="cursor-pointer"
                        alt="search_button"
                        src={"/search.svg"}
                        width={20}
                        height={20}
                    />
                    <Image
                        className="cursor-pointer"
                        alt="cart_img"
                        src={"/uil_cart.svg"}
                        width={20}
                        height={20}
                    />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
