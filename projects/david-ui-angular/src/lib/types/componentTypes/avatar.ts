import { colors } from '../generic';

export type variant = 'rounded' | 'circle';
export type color = colors;
export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type className = string;


// Interface
export interface Avatar {
  variant: variant;
  borderColor: color;
  size: size;
  className: className;
  addBorder: boolean;
}

export const DefaultAvatar: Avatar = {
  variant: 'circle',
  borderColor: 'gray',
  className: '',
  size: 'md',
  addBorder: false,
};


