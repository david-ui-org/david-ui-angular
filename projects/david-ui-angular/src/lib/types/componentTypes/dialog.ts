

// typescript types
export type open = boolean;
export type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type animate = string;
export type divider = boolean;
export type className = string;


export interface IDialog {
    open:open;
    size: size;
    animate: any;
    divider: divider;
    className: className;
    closeOnBackground: boolean
}

export const DefaultDialogProps : IDialog ={
    open: false,
    size: "md",
    animate: "",
    divider: true,
    className: "",
    closeOnBackground: false
}