import { IPropsMapper } from '../../../types/generic';

export const BreadCrumbTheme: IPropsMapper<object> = {
  initial: {
    width: 'w-max',
  },
  fullWidth: { display: 'block', width: 'w-full' },
  list: {
    display: 'flex',
    flexWrap: 'flex-wrap',
    alignItems: 'items-center',
    width: 'w-full',
    bg: 'bg-blue-gray-50',
    bgOpacity: 'bg-opacity-60',
    py: 'py-2',
    px: 'px-4',
    borderRadius: 'rounded-md',
  },
  item: {
    initial: {
      display: 'flex',
      alignItems: 'items-center',
      color: 'text-blue-gray-900',
      fontSmoothing: 'antialiased',
      fontFamily: 'font-sans',
      fontSize: 'text-sm',
      fontWeight: 'font-normal',
      lineHeight: 'leading-normal',
      cursor: 'cursor-pointer',
      transition: 'transition-colors duration-300',
      hover: 'hover:text-light-blue-500',
    },
    disabled: {
      pointerEvents: 'pointer-events-none',
    },
  },
  separator: {
    color: 'text-blue-gray-500',
    fontSize: 'text-sm',
    fontSmoothing: 'antialiased',
    fontFamily: 'font-sans',
    fontWeight: 'font-normal',
    lineHeight: 'leading-normal',
    px: 'mx-2',
    pointerEvents: 'pointer-events-none',
    userSelcet: 'select-none',
  },
};
