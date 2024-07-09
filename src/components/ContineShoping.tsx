import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContineShoping = () => {
    return (
        <Link
            href={"/shop"}
            className="mx-auto w-full max-md:py-3 md:pt-6 items-center  md:w-[80%]  lg:w-full  xl:w-[80%]   flex"
        >
            <Image
                src={"/arrow-down-01-round.svg"}
                alt="arrow down"
                width={38}
                height={38}
            />
            <span className="font-semibold">Continue Shopping</span>
        </Link>
    );
};

export default ContineShoping;
