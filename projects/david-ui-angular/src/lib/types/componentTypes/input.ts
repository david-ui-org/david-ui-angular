import { InputOutlinedTheme } from "../../theme/components/input/input-outline-theme/input-outline-theme";
import { InputStandardTheme } from "../../theme/components/input/input-standard-theme/input-standard-theme";
import { InputStaticTheme } from "../../theme/components/input/input-static-theme/input-static-theme";
import { textareaOutlinedTheme } from "../../theme/components/textarea/textarea-outline/textarea-outline-theme";
import { textareaStandardTheme } from "../../theme/components/textarea/textarea-standard/textarea-standard-theme";
import { textareaStaticTheme } from "../../theme/components/textarea/textarea-static/textarea-static-theme";
import { IPropsMapper, colors } from "../generic";

export type variant = "standard" | "outlined" | "static";
export type size = "md" | "lg";
export type color = colors;
export type label = string;
export type error = boolean;
export type success = boolean;
export type icon = HTMLElement;
export type resizable = boolean;


export interface IInputProps{
    variant : variant;
    size: size;
    color : color;
    label : label;
    error : error;
    success : success;
    icon :  icon | undefined;
    resizable : resizable

}

 export const DefaultInputProps :  IInputProps ={
     variant: "outlined",
     size: "md",
     color: "gray",
     label: "Enter your text",
     error: false,
     success: false,
     icon: undefined,
     resizable: false
 }

 export const TextAreaVarientMapper : IPropsMapper<IPropsMapper<object>> = {
    outlined:textareaOutlinedTheme,
    standard:textareaStandardTheme,
    static:textareaStaticTheme,
  }

  export const InputVarientMapper : IPropsMapper<IPropsMapper<object>> = {
    outlined:InputOutlinedTheme,
    standard:InputStandardTheme,
    static:InputStaticTheme,
  }