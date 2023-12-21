export type className = string;
export type open = boolean;

export interface ICollapse {
  open: open;
  className: className;
}

export const DefaultCollapse: ICollapse = {
  open: false,
  className: '',
};
