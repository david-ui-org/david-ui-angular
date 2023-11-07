import { IPropsMapper } from "../../../types/generic";

export const dialogHeaderTheme : IPropsMapper<object> ={
    container: {
        display: "flex",
        alignItems: "items-center",
        flexShrink: "shrink-0",
        p: "p-4",
        color: "text-blue-gray-900",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-2xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
      },
}