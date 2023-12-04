import { IPropsMapper } from '../../../types/generic';

export const PaginatorVariantTheme: IPropsMapper<object> = {
  Simple: {
    button: {
      position: 'relative',
      alignItems: 'align-middle',
      textClass:
        'text-center uppercase rounded-lg text-xs border border-gray-900 text-gray-900 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85]',
      fontClass: 'font-sans font-medium ',
      cursor: 'cursor-pointer',
      select: 'select-none',
      coverage: 'w-8 max-w-[32px] h-8 max-h-[32px]',
      disabled:
        'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none ',
      transition: 'transition-all ',
    },
  },
};
