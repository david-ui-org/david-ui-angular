import { colors } from '../generic';


export type variant = "filled" | "gradient" | "outlined" | "ghost";
export type color = colors;
export type open = boolean;
export type className = string;


// Interface
export interface Alert {
    variant: variant;
    color: color;
    open: boolean;
    isDismissible: boolean;
    className: className;
  }


export const DefaultAlert: Alert = {
    variant: 'filled',
    color: 'blue',
    className: '',
    open: true,
    isDismissible: false
};