import { IPropsMapper } from '../../../../types/generic';
import inputStandardColors from './input-standard-colors';
import inputStandardLabelColors from './input-standard-label-colors';

export const InputStandardTheme: IPropsMapper<object> = {
  input: {
    borderWidth: 'border-b',
    borderColor: 'placeholder-shown:border-blue-gray-200',
  },
  inputWithIcon: {
    pr: '!pr-7',
  },
  icon: {
    top: 'top-2/4',
    right: 'right-0',
    transform: '-translate-y-1/4',
  },
  variantColor: inputStandardColors,
  labelColor: inputStandardLabelColors,
  label:{
    position: "-top-1.5",
    fontSize: "peer-placeholder-shown:text-sm",
    floated: {
      fontSize: "text-[11px] peer-focus:text-[11px]",
    },
    after: {
      content: "after:content['']",
      display: "after:block",
      width: "after:w-full",
      position: "after:absolute",
      bottom: "after:-bottom-1.5",
      left: "left-0",
      borderWidth: "after:border-b-2",
      scale: "after:scale-x-0",
      floated: {
        scale: "peer-focus:after:scale-x-100",
      },
      transition: "after:transition-transform after:duration-300",
    },
  },
  md: {
    container: {
      height: 'h-11',
    },
    input: {
      fontSize: 'text-sm',
      pt: 'pt-4',
      pb: 'pb-1.5',
    },
    label: {
      lineHeight: 'peer-placeholder-shown:leading-[4.25]',
    },
    icon: {
      width: 'w-5',
      height: 'h-5',
    },
  },
  lg: {
    container: {
      height: 'h-12',
    },
    input: {
      fontSize: 'text-sm',
      px: 'px-px',
      pt: 'pt-5',
      pb: 'pb-2',
    },
    label: {
      lineHeight: 'peer-placeholder-shown:leading-[4.875]',
    },
    icon: {
      width: 'w-6',
      height: 'h-6',
    },
  },
  error: {
    input: {
      borderColor: 'border-red-500 placeholder-shown:border-red-500',
      borderColorFocused: 'focus:border-red-500',
    },
    label: {
      color:
        'text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500',
      after: 'after:border-red-500 peer-focus:after:border-red-500',
    },
  },
  success: {
    input: {
      borderColor: 'border-green-500 placeholder-shown:border-green-500',
      borderColorFocused: 'focus:border-green-500',
    },
    label: {
      color:
        'text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500',
      after: 'after:border-green-500 peer-focus:after:border-green-500',
    },
  },
  shrink: {
    input: {},
    label: {
      fontSize: '!text-[11px]',
      lineHeight: '!leading-tight',
    },
  },
};
