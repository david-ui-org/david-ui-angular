import { IPropsMapper } from "../../../types/generic";

export const dialogFooterTheme : IPropsMapper<object> ={
    container: {
        display: "flex",
        alignItems: "items-center",
        justifyContent: "justify-end",
        flexShrink: "shrink-0",
        flexWrap: "flex-wrap",
        p: "p-4",
        color: "text-blue-gray-500",
      },
}