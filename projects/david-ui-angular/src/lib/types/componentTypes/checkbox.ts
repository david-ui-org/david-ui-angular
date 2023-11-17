import { colors } from "../generic";




// typescript types
export type color = colors;
export type label = string;
export type ripple = boolean;
export type className = string;
export type disabled = boolean;

export interface BaseProps{
    className : className
}

export type containerProps =  BaseProps;
export type circleProps =  BaseProps;


export interface ICheckBox{
    color: string;
    label: string;
    useCustomIcon: boolean;
    ripple: boolean;
    className: string;
    disabled: boolean;
}

export const DefaultCheckBox : ICheckBox ={
    color: "blue",
    label: "",
    useCustomIcon: false,
    ripple: true,
    className: "",
    disabled: false
}