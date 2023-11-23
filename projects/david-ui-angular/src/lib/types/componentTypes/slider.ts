import { colors } from "../generic";


export type color = colors;
export type size = "sm" | "md" | "lg";
export type className = string;
export type trackClassName = string;
export type thumbClassName = string;
export type barClassName = string;
export type defaultValue = string | number | readonly string[];
export type value = string | number | readonly string[];
export type min = number | string;
export type max = number | string;
export type step = number | string;
// export type inputRef = React.RefObject<HTMLInputElement>;
// export type inputProps = React.ComponentProps<"input">;

export interface ISlider{
    color: color;
    size:size;
    className : className;
    trackClassName: trackClassName;
    thumbClassName : thumbClassName;
    barClassName: barClassName;
    defaultValue: defaultValue;
    value: value;
    min?:min;
    max? : max;
    step: step
}


export const DefaultSlider : ISlider ={
    color: "gray",
    size: "md",
    min: undefined,
    max: undefined,
    step: "any",
    className: "",
    trackClassName: "",
    thumbClassName: "",
    barClassName: "",
    defaultValue: "50",
    value: ""
}