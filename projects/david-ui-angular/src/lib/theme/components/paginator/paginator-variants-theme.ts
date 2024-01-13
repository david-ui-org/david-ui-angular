import { IPropsMapper } from '../../../types/generic';

const disableClass =
  'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ';

export const PaginatorVariantTheme: IPropsMapper<object> = {
  simple: {
    page: {},
    button: {
      position: 'relative',
      alignItems: 'align-middle',
      select: 'select-none',
      textClass:
        'text-center uppercase rounded-lg text-xs border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]',
      fontClass: 'font-sans font-medium ',
      cursor: 'cursor-pointer',
      coverage: 'w-8 max-w-[32px] h-8 max-h-[32px]',
      disabled: disableClass,
      transition: 'transition-all ',
    },
  },
  standard: {
    page: {
      position: 'relative',
      alignItems: 'align-middle',
      select: 'select-none',
      class:
        'font-sans font-medium text-center uppercase transition-all rounded-lg text-xs text-gray-900',
      disabled: disableClass,
      coverage: 'w-10 max-w-[40px] h-10 max-h-[40px]',
      'focus-active': 'focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
    },
    button: {
      alignItems: 'align-middle',
      textClass:
        'text-center uppercase rounded-lg text-xs  text-gray-900 hover:bg-gray-900/10  hover:opacity-75 active:opacity-[0.85]',
      fontClass: 'font-sans font-bold ',
      padding: 'py-3 px-6',
      cursor: 'cursor-pointer',
      select: 'select-none',
      disabled:
        'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ',
      transition: 'transition-all ',
    },
  },
  circular: {
    page: {
      position: 'relative',
      alignItems: 'align-middle',
      select: 'select-none',
      class:
        'font-sans font-medium text-center uppercase transition-all rounded-full text-xs text-gray-900',
      disabled: disableClass,
      coverage: 'w-10 max-w-[40px] h-10 max-h-[40px]',
      'focus-active': ' focus:shadow-none active:opacity-[0.85] active:shadow-none'
    },
    button: {
      alignItems: 'align-middle',
      textClass:
        'text-center uppercase rounded-full text-xs text-gray-900 hover:bg-gray-900/10 hover:opacity-75 active:opacity-[0.85]',
      fontClass: 'font-sans font-bold ',
      cursor: 'cursor-pointer',
      padding: 'py-3 px-6',
      select: 'select-none',
      disabled:
        'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ',
      transition: 'transition-all ',
    },
  },
};
