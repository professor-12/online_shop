import React from "react";
import { Logo } from "./UI/Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-secondary-darkBlue py-[37px]">
            <div className="wrapper flex  max-md:gap-[26px] flex-col md:flex-row text-white justify-center  md:justify-between mx-auto">
                <div className="space-y-[22px] flex flex-col max-md:justify-center max-md:text-center">
                    <Logo />
                    <p className="text-[12px] md:text-[18px] font-normal leading-[25px]">
                        Sustainable footwear for every step.Discover <br />{" "}
                        stylish and comfortable shoes
                    </p>
                    <div className="flex gap-[40px] justify-center items-center">
                        <Image
                            className="max-md:w-[25px]"
                            alt="search_button"
                            src={"/instagram.svg"}
                            width={50}
                            height={50}
                        />
                        <Image
                            className="max-md:w-[25px]"
                            alt="cart_img"
                            src={"/image 6.svg"}
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
                <div className="md:space-x-[50px] justify-between lg:gap-[139px]  flex  text-[20px]">
                    <div className="flex flex-col gap-[30px]">
                        <h1 className=" text-[18px] md:text-[24px] font-[700]">
                            Product
                        </h1>
                        <Link
                            className="text-white text-[16px] md:text-[18px]"
                            href={"/"}
                        >
                            Home
                        </Link>
                        <Link
                            className="text-white text-[16px] md:text-[18px]"
                            href={"/"}
                        >
                            Shop
                        </Link>
                        <Link
                            className="text-white text-[16px] md:text-[18px]"
                            href={"/"}
                        >
                            Sales
                        </Link>
                    </div>
                    <div className="flex flex-col px-2 md:px-0 gap-[30px]">
                        <h1 className="text-[18px] md:text-[24px] font-[700]">
                            Contact
                        </h1>
                        <Link
                            className="text-white flex items-center space-x-2  text-[16px] md:text-[18px]"
                            href={"/"}
                        >
                            <svg
                                width="20"
                                height="17"
                                viewBox="0 0 20 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15 0.75H5C2.381 0.75 0.25 2.881 0.25 5.5V11.5C0.25 14.119 2.381 16.25 5 16.25H15C17.619 16.25 19.75 14.119 19.75 11.5V5.5C19.75 2.881 17.619 0.75 15 0.75ZM5 2.25H15C16.354 2.25 17.515 3.08394 18.003 4.26294L11.803 8.39697C10.708 9.12597 9.292 9.12597 8.198 8.39697L1.99799 4.26294C2.48499 3.08294 3.646 2.25 5 2.25ZM15 14.75H5C3.208 14.75 1.75 13.292 1.75 11.5V5.901L7.36499 9.64502C8.16499 10.178 9.082 10.4449 10 10.4449C10.917 10.4449 11.834 10.178 12.635 9.64502L18.25 5.901V11.5C18.25 13.292 16.792 14.75 15 14.75Z"
                                    fill="#F4F4F4"
                                />
                            </svg>
                            <span>footfashion@gmail.com</span>
                        </Link>
                        <Link
                            className="text-white flex items-center space-x-2 text-[16px] md:text-[18px]"
                            href={"/"}
                        >
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.6857 15.1002C19.6627 14.9652 19.6348 14.8473 19.6058 14.7423C19.4308 14.1173 18.8867 13.6412 18.2197 13.5312L13.8877 12.8103C13.2497 12.7033 12.6107 12.9502 12.2187 13.4522C12.1647 13.5212 12.1128 13.5912 12.0648 13.6622C11.9938 13.7662 11.8528 13.8632 11.6998 13.7962C9.45276 12.8192 7.67875 11.0452 6.70275 8.79818C6.63475 8.64318 6.72972 8.5072 6.83172 8.4382C6.92672 8.3742 7.01872 8.30524 7.10772 8.23324C7.59472 7.83924 7.83676 7.20922 7.73876 6.58822L7.06774 2.33322C6.96474 1.68122 6.51777 1.14818 5.89977 0.94418C5.75477 0.89618 5.58678 0.852226 5.39178 0.817226C4.12578 0.591226 2.83075 0.949188 1.83575 1.80319C0.792747 2.69919 0.214739 4.00126 0.252739 5.37326C0.471739 13.4953 7.00373 20.0283 15.1257 20.2473C15.1667 20.2483 15.2078 20.2492 15.2488 20.2492C16.5658 20.2492 17.8107 19.6792 18.6797 18.6732C19.5407 17.6762 19.9077 16.3732 19.6857 15.1002ZM17.5428 17.6932C16.9418 18.3882 16.0677 18.7592 15.1647 18.7492C7.84073 18.5512 1.94872 12.6582 1.75072 5.33322C1.72672 4.41422 2.11274 3.54225 2.81274 2.94125C3.34174 2.48725 3.97273 2.24923 4.63073 2.24923C4.79473 2.24923 4.96076 2.26418 5.12676 2.29318C5.24276 2.31418 5.34173 2.33925 5.42773 2.36825C5.51073 2.39525 5.57172 2.47223 5.58672 2.56723L6.25774 6.82223C6.27274 6.91523 6.23676 7.00925 6.16576 7.06625C6.10776 7.11325 6.04872 7.15721 5.98772 7.19821C5.25372 7.69721 4.98177 8.60121 5.32677 9.39621C6.45477 11.9922 8.50576 14.0432 11.1008 15.1712C11.8928 15.5152 12.7988 15.2443 13.3038 14.5073C13.3338 14.4643 13.3647 14.4213 13.3987 14.3773C13.4527 14.3083 13.5468 14.2753 13.6418 14.2893L17.9737 15.0102C18.0657 15.0262 18.1427 15.0822 18.1617 15.1472C18.1797 15.2092 18.1947 15.2783 18.2087 15.3573C18.3527 16.1853 18.1098 17.0362 17.5428 17.6932Z"
                                    fill="#F4F4F4"
                                />
                            </svg>
                            <span>+234 802 3456 678</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
