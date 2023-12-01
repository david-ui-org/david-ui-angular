import { IPropsMapper } from '../../../../types/generic';
import { SelectStaticColors } from './select-static-colors';
import { SelectStaticLabelColors } from './select-static-label-colors';

export const SelectStaticTheme: IPropsMapper<object> = {
  select: {},
  label: {
    position: '-top-2.5',
    after: {
      content: "after:content[' ']",
      display: 'after:block',
      width: 'after:w-full',
      position: 'after:absolute',
      bottom: 'after:-bottom-2.5',
      left: 'left-0',
      borderWidth: 'after:border-b-2',
      transition: 'after:transition-transform after:duration-300',
    },
  },
  variantColor: SelectStaticColors,
  labelColor : SelectStaticLabelColors,
  md: {
    container: {
      height: 'h-11',
    },
    select: {
      fontSize: 'text-sm',
      pt: 'pt-4',
      pb: 'pb-1.5',
    },
    label: {
      initial: {},
      states: {
        close: {
          lineHeight: 'leading-tight',
        },
        open: {
          lineHeight: 'leading-tight',
        },
        withValue: {
          lineHeight: 'leading-tight',
        },
      },
    },
  },
  lg: {
    container: {
      height: 'h-12',
    },
    select: {
      fontSize: 'text-sm',
      px: 'px-px',
      pt: 'pt-5',
      pb: 'pb-2',
    },
    label: {
      initial: {},
      states: {
        close: {
          lineHeight: 'leading-tight',
        },
        open: {
          lineHeight: 'leading-tight',
        },
        withValue: {
          lineHeight: 'leading-tight',
        },
      },
    },
  },
  close: {
    select: {
      borderWidth: 'border-b',
    },
    label: {
      fontSize: 'text-sm',
      disabled: 'peer-disabled:text-blue-gray-400',
      after: {
        transform: 'after:scale-x-0',
      },
    },
  },
  open: {
    select: {
      borderWidth: 'border-b',
    },
    label: {
      fontSize: 'text-sm',
      disabled: 'peer-disabled:text-transparent',
      after: {
        transform: 'after:scale-x-100',
      },
    },
  },
  withValue: {
    select: {
      borderWidth: 'border-b',
    },
    label: {
      fontSize: 'text-sm',
      disabled: 'peer-disabled:text-transparent',
      after: {
        transform: 'after:scale-x-0',
      },
    },
  },
  error: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: 'border-red-500',
        },
        open: {
          borderColor: 'border-red-500',
        },
        withValue: {
          borderColor: 'border-red-500',
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: 'text-red-500',
          after: 'after:border-red-500',
        },
        open: {
          color: 'text-red-500',
          after: 'after:border-red-500',
        },
        withValue: {
          color: 'text-red-500',
          after: 'after:border-red-500',
        },
      },
    },
  },
  success: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: 'border-green-500',
        },
        open: {
          borderColor: 'border-green-500',
        },
        withValue: {
          borderColor: 'border-green-500',
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: 'text-green-500',
          after: 'after:border-green-500',
        },
        open: {
          color: 'text-green-500',
          after: 'after:border-green-500',
        },
        withValue: {
          color: 'text-green-500',
          after: 'after:border-green-500',
        },
      },
    },
  },
};
