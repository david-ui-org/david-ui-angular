

// typescript types
export type fullWidth = boolean;
export type className = string;


// Interface
export interface IBreadCrumb {
    fullWidth: fullWidth;
    className: className;
  }

  export const DefaultBreadCrumb : IBreadCrumb = {
      fullWidth: false,
      className: ""
  }