import { IPropsMapper } from '../../../types/generic';

export const IconButtonTheme: IPropsMapper<object> = {
    IconButton: {
        position: "relative",
        verticalAlign: "align-middle",
        userSelect: "select-none",
        fontFamily: "font-sans",
        fontWeight: "font-medium",
        textAlign: "text-center",
        textTransform: "uppercase",
        transition: "transition-all",
        disabled: "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
      },
      sm: {
        width: "w-8",
        maxWidth: "max-w-[32px]",
        height: "h-8",
        maxHeight: "max-h-[32px]",
        borderRadius: "rounded-lg",
        fontSize: "text-xs",
      },
      md: {
        width: "w-10",
        maxWidth: "max-w-[40px]",
        height: "h-10",
        maxHeight: "max-h-[40px]",
        borderRadius: "rounded-lg",
        fontSize: "text-xs",
      },
      lg: {
        width: "w-12",
        maxWidth: "max-w-[48px]",
        height: "h-12",
        maxHeight: "max-h-[48px]",
        borderRadius: "rounded-lg",
        fontSize: "text-sm",
      },
};
