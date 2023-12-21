import { SelectOutlinedTheme } from '../../theme/components/select/select-outline-theme/select-outline-theme';
import { SelectStandardTheme } from '../../theme/components/select/select-standard/select-standard-theme';
import { SelectStaticTheme } from '../../theme/components/select/select-static/select-static-theme';
import { IPropsMapper, colors } from '../generic';

// typescript types
export type variant = 'standard' | 'outlined' | 'static';
export type size = 'md' | 'lg';
export type color = colors;
export type label = string;
export type error = boolean;
export type success = boolean;
export type autoHeight = boolean;
export type lockScroll = boolean;

export interface ISelectProps {
  variant: variant;
  size: size;
  color: color;
  label: label;
  error: error;
  success: success;
  autoHeight: autoHeight;
  lockScroll: lockScroll;
}

export const DefaultSelectProps: ISelectProps = {
  variant: 'outlined',
  size: 'md',
  color: 'gray',
  label: 'Select an option',
  error: false,
  success: false,
  autoHeight: false,
  lockScroll: false,
};

export const SelectVariantMapper: IPropsMapper<IPropsMapper<object>> = {
  outlined: SelectOutlinedTheme,
  standard : SelectStandardTheme,
  static : SelectStaticTheme
};
