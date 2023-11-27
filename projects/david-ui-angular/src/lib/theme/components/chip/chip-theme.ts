import { IPropsMapper } from '../../../types/generic';

export const ChipTheme: IPropsMapper<object> = {
  chip: {
    position: 'relative',
    display: 'grid',
    placeItems: 'items-center',
    fontFamily: 'font-sans',
    fontWeight: 'font-bold',
    textTransform: 'uppercase',
    lineHeight: 'leading-none',
    whiteSpace: 'whitespace-nowrap',
    userSelect: 'select-none',
  },
  action: {
    position: '!absolute',
    top: 'top-2/4',
    right: 'right-1',
    translate: '-translate-y-2/4',
    mx: 'mx-px',
    rounded: 'rounded-md',
  },
  icon: {
    position: 'absolute',
    top: 'top-2/4',
    translate: '-translate-y-2/4',
  },
  sm: {
    chip: {
      py: 'py-1',
      px: 'px-2',
      fontSize: 'text-xs',
      borderRadius: 'rounded-md',
    },
    action: {
      width: 'w-4',
      height: 'h-4',
    },
    icon: {
      width: 'w-4',
      height: 'h-4',
      left: 'left-1',
    },
  },
  md: {
    chip: {
      py: 'py-1.5',
      px: 'px-3',
      fontSize: 'text-xs',
      borderRadius: 'rounded-lg',
    },
    action: {
      width: 'w-5',
      height: 'h-5',
    },
    icon: {
      width: 'w-5',
      height: 'h-5',
      left: 'left-1.5',
    },
  },
  lg: {
    chip: {
      py: 'py-2',
      px: 'px-4',
      fontSize: 'text-xs',
      borderRadius: 'rounded-lg',
    },
    action: {
      width: 'w-6',
      height: 'h-6',
    },
    icon: {
      width: 'w-6',
      height: 'h-6',
      left: 'left-1.5',
    },
  },
};
