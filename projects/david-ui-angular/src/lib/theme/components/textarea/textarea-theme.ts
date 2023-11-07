import { IPropsMapper } from '../../../types/generic';

export const textAreaTheme: IPropsMapper<object> = {
  container: {
    position: 'relative',
    width: 'w-full',
    minWidth: 'min-w-[200px]',
  },
  textarea: {
    peer: 'peer',
    width: 'w-full',
    height: 'h-full',
    minHeight: 'min-h-[100px]',
    bg: 'bg-transparent',
    color: 'text-blue-gray-700',
    fontFamily: 'font-sans',
    fontWeight: 'font-normal',
    outline: 'outline outline-0 focus:outline-0',
    resize: 'resize-y',
    disabled: 'disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none',
    transition: 'transition-all',
  },
  label: {
    display: 'flex',
    width: 'w-full',
    height: 'h-full',
    userSelect: 'select-none',
    pointerEvents: 'pointer-events-none',
    position: 'absolute',
    left: 'left-0',
    fontWeight: 'font-normal',
    color: 'peer-placeholder-shown:text-blue-gray-500',
    lineHeight: 'leading-tight peer-focus:leading-tight',
    disabled:
      'peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500',
    transition: 'transition-all',
  },

};
