import React from "react";
import Card from "./UI/Card";

const Carousel = () => {
    return (
        <div className="grid overflow-x-auto grid-flow-col gap-[30px]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default Carousel;
