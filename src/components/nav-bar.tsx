import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <div className="w-full py-[10px] flex items-center  text-white px-2 h-[79px] bg-secondary-darkBlue">
            <nav className="wrapper mx-auto flex item-center justify-between">
                <h1 className="text-[32px] max-lg:text-lg font-[700]">
                    FOOT FASHION
                </h1>
                <div className="space-x-[50px] font-[600] max-lg:sm flex items-center text-[20px]">
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
        </div>
    );
};

export default NavBar;
