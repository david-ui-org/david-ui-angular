import { colors } from '../generic';

// typescript types
export type color = colors;
export type label = string;
export type icon = HTMLElement | string;
export type ripple = boolean;
export type className = string;
export type disabled = boolean;

export interface IRadio {
  color: string;
  label: string;
  icon?: icon;
  ripple: boolean;
  className: string;
  value: string;
  name: string;
  disabled: boolean;
}

export const DefaultRadioButton: IRadio = {
    color: 'blue',
    label: '',
    icon: undefined,
    ripple: false,
    className: '',
    disabled: false,
    value: 'type',
    name: ''
};
