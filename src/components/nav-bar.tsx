"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { Logo } from "./UI/Logo";
import { useRouter } from "next/navigation";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const { push } = useRouter();

    const handlenavigation = (e: any, link: any) => {
        e.preventDefault();
        setOpen(false);
        push(link ?? "/");
    };

    return (
        <div className="w-full py-[10px] flex items-center  text-white px-2 h-[79px] bg-secondary-darkBlue">
            <nav className="wrapper max-md:hidden  mx-auto flex item-center justify-between">
                <div className="flex items-center gap-[79px]">
                    <Logo />
                    <div className="md:space-x-[50px] font-[600] max-lg:sm flex items-center text-[20px]">
                        <Link href={"/"}>HOME</Link>
                        <Link href={"/shop"}>SHOP</Link>
                        <Link href={"/sales"}>SALES</Link>
                    </div>
                </div>
                <div className="flex gap-[13px] items-center">
                    <Image
                        alt="search_button"
                        src={"/search.svg"}
                        width={30}
                        height={30}
                    />
                    <Link href="/cart">
                        <Image
                            className="cursor-pointer"
                            alt="cart_img"
                            src={"/uil_cart.svg"}
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
            </nav>
            {/* Mobile Nav Bar */}
            <nav className="wrapper flex items-center  md:hidden justify-between text-white">
                <button
                    onClick={() => setOpen(true)}
                    className="flex space-y-1 cursor-pointer flex-col"
                >
                    <span className="bg-white w-[2rem]   h-[3px]  rounded-md"></span>
                    <span className="bg-white w-[2rem]    h-[3px]  rounded-md"></span>
                    <span className="bg-white w-[2rem]    h-[3px] rounded-md"></span>
                </button>
                <Logo />
                <div className="flex gap-[13px] items-center">
                    <Image
                        className="cursor-pointer"
                        alt="search_button"
                        src={"/search.svg"}
                        width={20}
                        height={20}
                    />
                    <Link href="/cart">
                        <Image
                            alt="cart_img"
                            src={"/uil_cart.svg"}
                            width={20}
                            height={20}
                        />
                    </Link>
                </div>
            </nav>

            {open && (
                <div className="md:hidden bg-secondary-darkBlue text-center w-[165px]  top-[84px] fixed    px-3">
                    <div className="gap-y-[24px] flex-col flex py-4">
                        <span
                            className="text-white text-center  font-semibold text-lg"
                            onClick={() => setOpen(false)}
                        >
                            x
                        </span>
                        <Link
                            onClick={(e) => handlenavigation(e, "/")}
                            href="/"
                        >
                            <div className="flex gap-x-2">
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 14.6667H10.0075"
                                        stroke="#F4F4F4"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M16.6668 7.58334V11.75C16.6668 14.8927 16.6668 16.4641 15.6905 17.4404C14.7142 18.4167 13.1429 18.4167 10.0002 18.4167C6.85747 18.4167 5.28612 18.4167 4.30981 17.4404C3.3335 16.4641 3.3335 14.8927 3.3335 11.75V7.58334"
                                        stroke="#F4F4F4"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M18.3334 9.25001L14.7141 5.77958C12.4919 3.64876 11.3808 2.58334 10.0001 2.58334C8.61937 2.58334 7.50826 3.64875 5.28604 5.77958L1.66675 9.25001"
                                        stroke="#F4F4F4"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                </svg>
                                <span>Home</span>
                            </div>
                        </Link>
                        <Link
                            onClick={(e) => handlenavigation(e, "/shop")}
                            href="/shop"
                        >
                            <div className="flex items-center gap-x-2">
                                <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.33341 7.16668H10.6667M5.33341 12.5H10.6667M5.33341 9.83334H8.00008M2.66675 14.7667V2.23334C2.66675 2.12726 2.70889 2.02552 2.78391 1.9505C2.85892 1.87549 2.96066 1.83334 3.06675 1.83334H10.8347C10.9408 1.83344 11.0425 1.87564 11.1174 1.95068L13.2161 4.04934C13.2534 4.08661 13.283 4.13089 13.3031 4.17963C13.3232 4.22837 13.3335 4.28061 13.3334 4.33334V14.7667C13.3334 14.8192 13.3231 14.8712 13.303 14.9197C13.2829 14.9683 13.2534 15.0124 13.2163 15.0495C13.1791 15.0867 13.135 15.1161 13.0865 15.1362C13.038 15.1563 12.9859 15.1667 12.9334 15.1667H3.06675C3.01422 15.1667 2.9622 15.1563 2.91367 15.1362C2.86514 15.1161 2.82105 15.0867 2.78391 15.0495C2.74676 15.0124 2.7173 14.9683 2.6972 14.9197C2.67709 14.8712 2.66675 14.8192 2.66675 14.7667Z"
                                        stroke="#F4F4F4"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M10.6667 1.83334V4.10001C10.6667 4.2061 10.7089 4.30784 10.7839 4.38285C10.8589 4.45787 10.9607 4.50001 11.0667 4.50001H13.3334"
                                        stroke="#F4F4F4"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <p>Shop</p>
                            </div>
                        </Link>
                        <Link
                            onClick={(e) => handlenavigation(e, "/sales")}
                            href="/sales"
                        >
                            <div className="flex gap-x-2">
                                <svg
                                    width="20"
                                    height="21"
                                    viewBox="0 0 20 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0001 15.5C8.88963 16.0186 7.43097 16.3333 5.83341 16.3333C4.94515 16.3333 4.09982 16.236 3.33341 16.0605C2.84074 15.9476 2.59441 15.8912 2.29924 15.6577C2.13088 15.5245 1.92077 15.2608 1.82851 15.0669C1.66675 14.7271 1.66675 14.3975 1.66675 13.7383V4.76163C1.66675 3.94094 2.53344 3.37726 3.33341 3.56049C4.09982 3.73603 4.94515 3.83332 5.83341 3.83332C7.43097 3.83332 8.88963 3.51863 10.0001 2.99999C11.1105 2.48135 12.5692 2.16666 14.1667 2.16666C15.055 2.16666 15.9003 2.26395 16.6667 2.43949C17.1594 2.55233 17.4058 2.60875 17.7009 2.84231C17.8693 2.97552 18.0794 3.2392 18.1717 3.43304C18.3334 3.77291 18.3334 4.10248 18.3334 4.76163V13.7383C18.3334 14.559 17.4667 15.1227 16.6667 14.9395C15.9003 14.7639 15.055 14.6667 14.1667 14.6667C12.5692 14.6667 11.1105 14.9814 10.0001 15.5Z"
                                        stroke="#F4F4F4"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M1.66675 18C2.7772 18.5186 4.23586 18.8333 5.83342 18.8333C7.43097 18.8333 8.88963 18.5186 10.0001 18C11.1105 17.4813 12.5692 17.1666 14.1667 17.1666C15.7643 17.1666 17.223 17.4813 18.3334 18"
                                        stroke="#F4F4F4"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                    />
                                    <path
                                        d="M12.0834 9.24999C12.0834 10.4006 11.1507 11.3333 10.0001 11.3333C8.84949 11.3333 7.91675 10.4006 7.91675 9.24999C7.91675 8.0994 8.84949 7.16666 10.0001 7.16666C11.1507 7.16666 12.0834 8.0994 12.0834 9.24999Z"
                                        stroke="#F4F4F4"
                                        stroke-width="1.5"
                                    />
                                    <path
                                        d="M4.5835 10.0833L4.5835 10.0908"
                                        stroke="#F4F4F4"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M15.4167 8.41016L15.4167 8.41764"
                                        stroke="#F4F4F4"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <p>Sales</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
