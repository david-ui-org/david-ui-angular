import { IPropsMapper } from "../../../types/generic";



export const buttonTheme: IPropsMapper<object>  = {
    initial: {
        verticalAlign: "align-middle",
        userSelect: "select-none",
        fontFamily: "font-sans",
        fontWeight: "font-bold",
        textAlign: "text-center",
        textTransform: "uppercase",
        transition: "transition-all",
        disabled: "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
      },
};

