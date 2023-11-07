import { colors } from "../generic";



// typescript types
export type variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'lead' | 'paragraph' | 'small';
export type color = 'inherit' | 'current' | 'black' | 'white' | colors;
export type textGradient = boolean;
export type className = string;


export interface Typography{
    variant: variant;
    color: color;
    className: className;
    textGradient: boolean;
}

export const DefaultTypography: Typography = {
    variant: 'paragraph',
    className: '',
    textGradient: false,
    color: 'inherit'
  };
