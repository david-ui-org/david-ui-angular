import { IPropsMapper } from "../../../types/generic";
import alertGhost from "./alert-Ghost";
import alertGradient from "./alert-Gradient";
import alertOutlined from "./alert-Outlined";
import alertFilled from "./alert-filled";


export const AlertTheme :IPropsMapper<object>={
    alert: {
        position: "relative",
        display: "block",
        width: "w-full",
        fontFamily: "font-sans",
        fontSize: "text-base",
        fontWeight: "font-regular",
        px: "px-4",
        py: "py-4",
        borderRadius: "rounded-lg",
      },
      action: {
        position: "!absolute",
        top: "top-3",
        right: "right-3",
      },
      variants: {
        filled: alertFilled,
        gradient: alertGradient,
        outlined: alertOutlined,
        ghost: alertGhost,
      },
}