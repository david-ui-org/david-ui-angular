import { colors } from '../generic';

// typescript types
export type variant = 'simple' | 'standard' | 'circular' | 'grouped';
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
  showFirstLastOption: boolean;
  previousButtonLabel: string;
  nextButtonLabel: string
}

export const DefaultPaginationProps: IPaginator = {
  variant: 'simple',
  color: 'blue-gray',
  className: '',
  page: 1,
  pageSize: 5,
  visibleRangeLength: 5,
  length: 10,
  showFirstLastOption: true,
  previousButtonLabel: 'PREVIOUS',
  nextButtonLabel: 'NEXT'
};
