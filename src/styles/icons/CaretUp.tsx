import React from "react";
import { ColorProps } from "./Icons.types";

function CaretUp({ color, width, height }: ColorProps) {
    return (
        <svg fill={color} width={width} height={height} viewBox="0 0 256 256">
            <path d="M213.66 165.66a8 8 0 01-11.32 0L128 91.31l-74.34 74.35a8 8 0 01-11.32-11.32l80-80a8 8 0 0111.32 0l80 80a8 8 0 010 11.32z" />
        </svg>
    );
}

export default CaretUp;
