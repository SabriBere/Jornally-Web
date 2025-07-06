import React from "react";
import { ColorProps } from "./Icons.types";

function Trash({ color, width, height }: ColorProps) {
    return (
        <svg fill={color} width={width} height={height} viewBox="0 0 256 256">
            <path d="M216 48H40a8 8 0 000 16h8v144a16 16 0 0016 16h128a16 16 0 0016-16V64h8a8 8 0 000-16zm-24 160H64V64h128zM80 24a8 8 0 018-8h80a8 8 0 010 16H88a8 8 0 01-8-8z" />
        </svg>
    );
}

export default Trash;
