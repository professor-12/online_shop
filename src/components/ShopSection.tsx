import React from "react";
import Card from "./UI/Card";

const ShopSection = () => {
    return (
        <section className="space-y-[51px]">
            <div className="space-y-[38px]">
                <div className="space-y-[10px]">
                    <h2 className="text-[36px] text-center font-semibold">
                        Shop Now, Turn Heads Later
                    </h2>
                    <p className="text-gray leading-[24px] text-center text-[20px]">
                        Don’t wait to upgrade your wardrobe! Grab your favorites
                        now and be <br /> ready to turn heads wherever you go.{" "}
                    </p>
                </div>

                <div className="text-center text-[20px] text-[#151414] space-x-[39px] flex justify-center">
                    <p>Men</p>
                    <p>Women</p>
                    <p>Children</p>
                </div>
            </div>
            <div className="wrapper mx-auto gap-[28px] grid xl:grid-cols-4">
                <Card width="261" shop height="282" />
                <Card width="261" shop height="282" />
                <Card width="261" shop  height="282" />
                <Card width="261" shop height="282" />
                <Card width="261" shop height="282" />
            </div>
        </section>
    );
};

export default ShopSection;
