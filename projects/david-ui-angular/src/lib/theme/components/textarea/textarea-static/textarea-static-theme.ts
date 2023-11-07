import { IPropsMapper } from '../../../../types/generic';
import textareaStaticColors from './textarea-static-colors';
import textareaStaticLabelColors from './textarea-static-label-colors';

export const textareaStaticTheme: IPropsMapper<object> = {
  textarea: {
    borderWidth: 'border-b',
    borderColor: 'placeholder-shown:border-blue-gray-200',
  },
  variantColor: textareaStaticColors,
  labelColor : textareaStaticLabelColors,
  label: {
    position: '-top-2.5',
    fontSize: 'text-sm peer-focus:text-sm',
    after: {
      content: "after:content[' ']",
      display: 'after:block',
      width: 'after:w-full',
      position: 'after:absolute',
      bottom: 'after:-bottom-1',
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
      lineHeight: 'peer-placeholder-shown:leading-tight',
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
      lineHeight: 'peer-placeholder-shown:leading-tight',
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
    label: {},
  },
};
