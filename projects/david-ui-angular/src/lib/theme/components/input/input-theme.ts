import { IPropsMapper } from '../../../types/generic';

export const InputTheme: IPropsMapper<object> = {
  container: {
    position: 'relative',
    width: 'w-full',
    minWidth: 'min-w-[200px]',
  },
  input: {
    peer: 'peer',
    width: 'w-full',
    height: 'h-full',
    bg: 'bg-transparent',
    color: 'text-blue-gray-700',
    fontFamily: 'font-sans',
    fontWeight: 'font-normal',
    outline: 'outline outline-0 focus:outline-0',
    disabled: 'disabled:bg-blue-gray-50 disabled:border-0',
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
    overflow: '!overflow-visible',
    textOverflow: 'truncate',
    color: 'peer-placeholder-shown:text-blue-gray-500',
    lineHeight: 'leading-tight peer-focus:leading-tight',
    disabled:
      'peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500',
    transition: 'transition-all',
  },
  icon: {
    display: 'grid',
    placeItems: 'place-items-center',
    position: 'absolute',
    color: 'text-blue-gray-500',
  },
  asterisk: {
    display: 'inline-block',
    color: 'text-red-500',
    ml: 'ml-0.5',
  },
};
