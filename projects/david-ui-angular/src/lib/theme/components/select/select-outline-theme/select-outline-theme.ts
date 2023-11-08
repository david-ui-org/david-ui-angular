import { IPropsMapper } from '../../../../types/generic';

export const SelectOutlinedTheme: IPropsMapper<object> = {
  select: {},
  label: {
    position: '-top-1.5',
    before: {
      content: "before:content['']",
      display: 'before:block',
      boxSizing: 'before:box-border',
      width: 'before:w-2.5',
      height: 'before:h-1.5',
      mt: 'before:mt-[6.5px]',
      mr: 'before:mr-1',
      borderRadius: 'before:rounded-tl-md',
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
      borderRadius: 'after:rounded-tr-md',
      pointerEvents: 'after:pointer-events-none',
      transition: 'after:transition-all',
      disabled: 'peer-disabled:after:border-transparent',
    },
  },
  md: {
    container: {
      height: 'h-10',
    },
    select: {
      fontSize: 'text-sm',
      px: 'px-3',
      py: 'py-2.5',
      borderRadius: 'rounded-[7px]',
    },
    label: {
      initial: {},
      states: {
        close: {
          lineHeight: 'leading-[3.75]',
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
      height: 'h-11',
    },
    select: {
      fontSize: 'text-sm',
      px: 'px-3',
      py: 'py-3',
      borderRadius: 'rounded-[7px]',
    },
    label: {
      initial: {},
      states: {
        close: {
          lineHeight: 'leading-[4.1]',
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
  error: {
    select: {
      initial: {},
      states: {
        close: {
          borderColor: 'border-red-500',
        },
        open: {
          borderColor: 'border-red-500',
          borderTopColor: 'border-t-transparent',
        },
        withValue: {
          borderColor: 'border-red-500',
          borderTopColor: 'border-t-transparent',
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: 'text-red-500',
          before: 'before:border-red-500',
          after: 'after:border-red-500',
        },
        open: {
          color: 'text-red-500',
          before: 'before:border-red-500',
          after: 'after:border-red-500',
        },
        withValue: {
          color: 'text-red-500',
          before: 'before:border-red-500',
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
          borderTopColor: 'border-t-transparent',
        },
        withValue: {
          borderColor: 'border-green-500',
          borderTopColor: 'border-t-transparent',
        },
      },
    },
    label: {
      initial: {},
      states: {
        close: {
          color: 'text-green-500',
          before: 'before:border-green-500',
          after: 'after:border-green-500',
        },
        open: {
          color: 'text-green-500',
          before: 'before:border-green-500',
          after: 'after:border-green-500',
        },
        withValue: {
          color: 'text-green-500',
          before: 'before:border-green-500',
          after: 'after:border-green-500',
        },
      },
    },
  },
  close: {
    select: {
      borderWidth: 'border',
    },
    label: {
      fontSize: 'text-sm',
      disabled: 'peer-disabled:text-blue-gray-400',
      before: {
        bt: 'before:border-t-transparent',
        bl: 'before:border-l-transparent',
      },
      after: {
        bt: 'after:border-t-transparent',
        br: 'after:border-r-transparent',
      },
    },
  },
  open: {
    select: {
      borderWidth: 'border-2',
      borderColor: 'border-t-transparent',
    },
    label: {
      fontSize: 'text-[11px]',
      disabled: 'peer-disabled:text-transparent',
      before: {
        bt: 'before:border-t-2',
        bl: 'before:border-l-2',
      },
      after: {
        bt: 'after:border-t-2',
        br: 'after:border-r-2',
      },
    },
  },
  withValue: {
    select: {
      borderWidth: 'border',
      borderColor: 'border-t-transparent',
    },
    label: {
      fontSize: 'text-[11px]',
      disabled: 'peer-disabled:text-transparent',
      before: {
        bt: 'before:border-t',
        bl: 'before:border-l',
      },
      after: {
        bt: 'after:border-t',
        br: 'after:border-r',
      },
    },
  },
};
