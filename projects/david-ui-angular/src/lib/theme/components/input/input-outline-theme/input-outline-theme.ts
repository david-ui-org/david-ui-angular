import { IPropsMapper } from '../../../../types/generic';
import inputOutlinedColors from './input-outline-colors';
import inputOutlinedLabelColors from './input-outline-labels-colors';

export const InputOutlinedTheme: IPropsMapper<object> = {
  input: {
    borderWidth: 'placeholder-shown:border',
    borderColor:
      'placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200',
    floated: {
      borderWidth: 'border focus:border-2',
      borderColor: 'border-t-transparent focus:border-t-transparent',
    },
  },
  inputWithIcon: {
    pr: '!pr-9',
  },
  icon: {
    top: 'top-2/4',
    right: 'right-3',
    transform: '-translate-y-2/4',
  },
  variantColor: inputOutlinedColors,
  labelColor: inputOutlinedLabelColors,
  label: {
    position: '-top-1.5',
    fontSize: 'peer-placeholder-shown:text-sm',
    floated: {
      fontSize: 'text-[11px] peer-focus:text-[11px]',
    },
    before: {
      content: "before:content['']",
      display: 'before:block',
      boxSizing: 'before:box-border',
      width: 'before:w-2.5',
      height: 'before:h-1.5',
      mt: 'before:mt-[6.5px]',
      mr: 'before:mr-1',
      borderColor: 'peer-placeholder-shown:before:border-transparent',
      borderRadius: 'before:rounded-tl-md',
      floated: {
        bt: 'before:border-t peer-focus:before:border-t-2',
        bl: 'before:border-l peer-focus:before:border-l-2',
      },
      pointerEvents: 'before:pointer-events-none',
      transition: 'before:transition-all',
      disabled: 'peer-disabled:before:border-transparent',
    },
    after: {
      content: "after:content['']",
      display: 'after:block',
      flexGrow: 'after:flex-grow',
      boxSizing: 'after:box-border',
      width: 'after:w-2.5',
      height: 'after:h-1.5',
      mt: 'after:mt-[6.5px]',
      ml: 'after:ml-1',
      borderColor: 'peer-placeholder-shown:after:border-transparent',
      borderRadius: 'after:rounded-tr-md',
      floated: {
        bt: 'after:border-t peer-focus:after:border-t-2',
        br: 'after:border-r peer-focus:after:border-r-2',
      },
      pointerEvents: 'after:pointer-events-none',
      transition: 'after:transition-all',
      disabled: 'peer-disabled:after:border-transparent',
    },
  },
  md: {
    container: {
      height: 'h-10',
    },
    input: {
      fontSize: 'text-sm',
      px: 'px-3',
      py: 'py-2.5',
      borderRadius: 'rounded-[7px]',
    },
    label: {
      lineHeight: 'peer-placeholder-shown:leading-[3.75]',
    },
    icon: {
      width: 'w-5',
      height: 'h-5',
    },
  },
  lg: {
    container: {
      height: 'h-11',
    },
    input: {
      fontSize: 'text-sm',
      px: 'px-3',
      py: 'py-3',
      borderRadius: 'rounded-md',
    },
    label: {
      lineHeight: 'peer-placeholder-shown:leading-[4.1]',
    },
    icon: {
      width: 'w-6',
      height: 'h-6',
    },
  },
  error: {
    input: {
      borderColor:
        'border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500',
      borderColorFocused: 'focus:border-red-500',
    },
    label: {
      color:
        'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
      before: 'before:border-red-500 peer-focus:before:border-red-500',
      after: 'after:border-red-500 peer-focus:after:border-red-500',
    },
  },
  success: {
    input: {
      borderColor:
        'border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500',
      borderColorFocused: 'focus:border-green-500',
    },
    label: {
      color:
        'text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500',
      before: 'before:border-green-500 peer-focus:before:border-green-500',
      after: 'after:border-green-500 peer-focus:after:border-green-500',
    },
  },
  shrink: {
    input: {
      borderTop: '!border-t-transparent',
    },
    label: {
      fontSize: '!text-[11px]',
      lineHeight: '!leading-tight',
      borderColor: 'before:!border-blue-gray-200 after:!border-blue-gray-200',
    },
  },
};
