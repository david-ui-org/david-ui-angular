import { IPropsMapper } from "../../../types/generic";

export const AvatarPropsMapper: IPropsMapper<object> = {
    circle: {
      display: 'inline-block',
      position: 'relative',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
      borderRadius: '!rounded-full',
    },
    rounded: {
      display: 'inline-block',
      position: 'relative',
      objectFit: 'object-cover',
      objectPosition: 'object-center',
      borderRadius: '!rounded-lg',
    },
    xs: {
      width: 'w-6',
      height: 'h-6',
      borderRadius: 'rounded-md',
    },
    sm: {
      width: 'w-9',
      height: 'h-9',
      borderRadius: 'rounded-md',
    },
    md: {
      width: 'w-12',
      height: 'h-12',
      borderRadius: 'rounded-lg',
    },
    lg: {
      width: 'w-[58px]',
      height: 'h-[58px]',
      borderRadius: 'rounded-lg',
    },
    xl: {
      width: 'w-[74px]',
      height: 'h-[74px]',
      borderRadius: 'rounded-xl',
    },
    xxl: {
      width: 'w-[110px]',
      height: 'h-[110px]',
      borderRadius: 'rounded-2xl',
    },
  };