"use client";
import React, { useState } from "react";

const PaginationButton = () => {
    const [page, setPage] = useState(1);
    return (
        <div className="mx-auto flex gap-3 p-3 justify-center">
            <button
                onClick={() => {
                    if (page <= 1) {
                        return;
                    }
                    setPage((prev) => prev - 1);
                }}
                className="border hover:border-secondary-darkBlue border-secondary-darkBlue px-[6px]  rounded-lg"
            >
                Previous
            </button>
            {new Array(6).fill(null).map((_, indx) => {
                const active = indx + 1 === page;
                return (
                    <button
                        key={indx}
                        onClick={() => setPage(indx + 1)}
                        className={`border ${indx >= 4 && "max-md:hidden"} ${
                            active
                                ? "hover:bg-[#CED7F4]   bg-secondary-darkBlue text-white"
                                : "text-black"
                        }  border-secondary-darkBlue hover:bg-secondary-darkBlue hover:text-white h-[29px] w-[29px] rounded-lg`}
                    >
                        {indx + 1}
                    </button>
                );
            })}

            <button
                onClick={() => {
                    if (page >= 6) {
                        return;
                    }
                    setPage((prev) => prev + 1);
                }}
                className="border    border-secondary-darkBlue  h-[29px] px-[5px] rounded-lg"
            >
                next
            </button>
        </div>
    );
};

export default PaginationButton;
