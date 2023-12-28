import buttonFilled from '../../theme/components/button/button-fillled';
import buttonGradient from '../../theme/components/button/button-gradient';
import buttonOutlined from '../../theme/components/button/button-outline';
import buttonText from '../../theme/components/button/button-text';
import { IPropsMapper, colors } from '../generic';

// typescript types
export type variant = 'filled' | 'outlined' | 'gradient' | 'text';
export type size = 'sm' | 'md' | 'lg';
export type color = 'white' | colors;
export type fullWidth = boolean;
export type ripple = boolean;
export type className = string;

// Interface
export interface Button {
  variant: variant;
  size: size;
  color: color;
  fullWidth: fullWidth;
  ripple: ripple;
  rounded: boolean;
  className: className;
}



export const DefaultButton: Button = {
  variant: 'filled',
  size: 'md',
  color: 'gray',
  fullWidth: false,
  ripple: true,
  className: '',
  rounded: false
};

export const DefaultButtonPropsMapper: IPropsMapper<string> = {
  sm: "py-2 px-4 text-xs rounded-lg",
  md: "py-3 px-6 text-xs rounded-lg",
  lg: "py-3.5 px-7 text-sm rounded-lg",
};

/**
 * Button Variant Mapper
 * Map the variant of the button
 */
export const ButtonVarientMapper : IPropsMapper<IPropsMapper<object>> = {
  filled : buttonFilled,
  outlined: buttonOutlined,
  gradient : buttonGradient,
  text : buttonText
}
