import chipFilled from "../../theme/components/chip/chip-filled";
import chipGhost from "../../theme/components/chip/chip-ghost";
import chipGradient from "../../theme/components/chip/chip-gradient";
import chipOutlined from "../../theme/components/chip/chip-outlined";
import { IPropsMapper, colors } from "../generic";

// typescript types
export type variant = "filled" | "gradient" | "outlined" | "ghost";
export type size = "sm" | "md" | "lg";
export type color = colors;
export type open = boolean;
export type onClose = () => void;
export type isDismissible = boolean
export type className = string;

// export type icon = HTMLElement; // will be catered soon

// Interface
export interface Chip {
    variant: variant;
    size: size;
    color: color;
    className: className;
    open: open;
    isDismissible : isDismissible
    hasIcon : boolean
  }
  
  
  
  export const DefaultChip: Chip = {
      variant: 'filled',
      size: 'md',
      color: 'gray',
      className: '',
      open: false,
      isDismissible: false,
      hasIcon: false
  };

  export const ChipVariantMapper : IPropsMapper<IPropsMapper<object>> = {
    outlined:chipOutlined,
    filled:chipFilled,
    gradient:chipGradient,
    ghost: chipGhost
  }