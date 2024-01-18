import { colors } from '../generic';

// typescript types
export type color = colors;
export type label = string;
export type icon = boolean;
export type ripple = boolean;
export type className = string;
export type disabled = boolean;

export interface IRadio {
  color: string;
  label: string;
  useCustomIcon?: icon;
  ripple: boolean;
  className: string;
  value: string;
  name: string;
  disabled: boolean;
}

export const DefaultRadioButton: IRadio = {
    color: 'blue',
    label: '',
    useCustomIcon: false,
    ripple: true,
    className: '',
    disabled: false,
    value: 'type',
    name: ''
};
