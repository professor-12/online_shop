"use client";
import Image from "next/image";
import React, { useState } from "react";

const CheckBox = ({ defaultValue }: { defaultValue?: boolean }) => {
    const [a, setA] = useState<boolean>(defaultValue ?? !true);
    return (
        <div
            className="min-h-[31px] overflow-hidden"
            onClick={() => setA((pre) => !pre)}
        >
            {a ? (
                <Image
                    className="cursor-pointer"
                    src="/checkmark-square-02.svg"
                    width={30}
                    height={30}
                    alt="checkMark"
                />
            ) : (
                <Image
                    className="cursor-pointer"
                    src="/checkmark-square-02 (1).svg"
                    width={30}
                    height={30}
                    alt="checkMark"
                />
            )}
        </div>
    );
};

export default CheckBox;
