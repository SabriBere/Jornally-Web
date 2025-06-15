import React from "react";
import { ColorProps } from "./Icons.types";

function ArrowNext({ color, width, height }: ColorProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 256 256"
        >
            <path d="M229.66 157.66l-48 48a8 8 0 01-11.32-11.32L204.69 160H128A104.11 104.11 0 0124 56a8 8 0 0116 0 88.1 88.1 0 0088 88h76.69l-34.35-34.34a8 8 0 0111.32-11.32l48 48a8 8 0 010 11.32z" />
        </svg>
    );
}

export default ArrowNext;
