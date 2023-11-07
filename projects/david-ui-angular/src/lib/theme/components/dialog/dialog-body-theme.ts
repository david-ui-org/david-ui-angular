import { IPropsMapper } from "../../../types/generic";

export const dialogBodyTheme : IPropsMapper<object> ={
    container: {
        position: "relative",
        p: "p-4",
        color: "text-blue-gray-500",
        fontSmoothing: "antialiased",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-normal",
        lineHeight: "leading-relaxed",
      },
      divider: {
        borderTop: "border-t",
        borderTopColor: "border-t-blue-gray-100",
        borderBottom: "border-b",
        borderBottomColor: "border-b-blue-gray-100",
      },
}