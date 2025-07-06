import React from "react";
import { ColorProps } from "./Icons.types";

function ClipboardText({ color, width, height }: ColorProps) {
    return (
        <svg fill={color} width={width} height={height} viewBox="0 0 256 256">
            <path d="M168 152a8 8 0 01-8 8H96a8 8 0 010-16h64a8 8 0 018 8zm-8-40H96a8 8 0 000 16h64a8 8 0 000-16zm56-64v168a16 16 0 01-16 16H56a16 16 0 01-16-16V48a16 16 0 0116-16h36.26a47.92 47.92 0 0171.48 0H200a16 16 0 0116 16zM96 64h64a32 32 0 00-64 0zm104-16h-26.75A47.93 47.93 0 01176 64v8a8 8 0 01-8 8H88a8 8 0 01-8-8v-8a47.93 47.93 0 012.75-16H56v168h144z" />
        </svg>
    );
}

export default ClipboardText;
