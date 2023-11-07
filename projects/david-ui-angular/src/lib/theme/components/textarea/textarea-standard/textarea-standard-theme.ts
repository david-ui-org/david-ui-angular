import { IPropsMapper } from '../../../../types/generic';
import textareaStandardColors from './textarea-standard-colors';
import textareaStandardLabelColors from './textarea-standard-label-colors';

export const textareaStandardTheme: IPropsMapper<object> = {
  textarea: {
    borderWidth: 'border-b',
    borderColor: 'placeholder-shown:border-blue-gray-200',
  },
  variantColor: textareaStandardColors,
  labelColor : textareaStandardLabelColors,
  label: {
    position: '-top-1.5',
    fontSize: 'peer-placeholder-shown:text-sm',
    floated: {
      fontSize: 'text-[11px] peer-focus:text-[11px]',
    },
    after: {
      content: "after:content[' ']",
      display: 'after:block',
      width: 'after:w-full',
      position: 'after:absolute',
      bottom: 'after:-bottom-0',
      left: 'left-0',
      borderWidth: 'after:border-b-2',
      scale: 'after:scale-x-0',
      floated: {
        scale: 'peer-focus:after:scale-x-100',
      },
      transition: 'after:transition-transform after:duration-300',
    },
  },
  md: {
    container: {
      height: 'h-11',
    },
    textarea: {
      fontSize: 'text-sm',
      pt: 'pt-4',
      pb: 'pb-1.5',
    },
    label: {
      lineHeight: 'peer-placeholder-shown:leading-[4.25]',
    },
  },
  lg: {
    container: {
      height: 'h-12',
    },
    textarea: {
      fontSize: 'text-sm',
      px: 'px-px',
      pt: 'pt-5',
      pb: 'pb-2',
    },
    label: {
      lineHeight: 'peer-placeholder-shown:leading-[4.875]',
    },
  },
  error: {
    textarea: {
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
    textarea: {
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
    textarea: {},
    label: {
      fontSize: '!text-[11px]',
      lineHeight: '!leading-tight',
    },
  },
};
