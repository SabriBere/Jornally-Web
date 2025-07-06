import React from "react";
import { ColorProps } from "./Icons.types";

function SvgComponent({ color, width, height }: ColorProps) {
    return (
        <svg fill={color} width={width} height={height} viewBox="0 0 256 256">
            <path d="M224 48H32a8 8 0 00-8 8v136a16 16 0 0016 16h176a16 16 0 0016-16V56a8 8 0 00-8-8zM40 112h40v32H40zm56 0h120v32H96zm120-48v32H40V64zM40 160h40v32H40zm176 32H96v-32h120v32z" />
        </svg>
    );
}

export default SvgComponent;
