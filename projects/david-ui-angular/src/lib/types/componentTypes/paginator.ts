import { colors } from "../generic";



// typescript types
export type variant = "Simple" | "Standard" | "Circular" | "Grouped";
export type color = colors;
export type page = number;
export type pageSize = number;
export type length = number;
export type visibleRangeLength = number;
export type pageSizes = number[];
export type className = string;

// Interface
export interface IPaginator {
    variant: variant;
    color: color;
    className: className;
    page: page;
    pageSize: pageSize;
    visibleRangeLength: visibleRangeLength;
    length: length;


  }

export const DefaultPaginationProps : IPaginator ={
    variant: "Simple",
    color: "blue-gray",
    className: "",
    page: 1,
    pageSize: 5,
    visibleRangeLength: 1,
    length: 10
}