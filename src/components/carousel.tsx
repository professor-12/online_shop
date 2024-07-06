import React from "react";
import Card from "./UI/Card";

const Carousel = () => {
    return (
        <div className="grid overflow-hidden grid-flow-col gap-[30px]">
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
