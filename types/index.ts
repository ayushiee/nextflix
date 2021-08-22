import { Breakpoint } from '../config/breakpoints';

export type Maybe<T> = T | null;

export type Dimension = {
  height: number;
  width: number;
};

export type DimensionDetail = {
  dimension: Dimension;
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export type Genre = {
  id: number;
  name: string;
};

export enum MediaType {
  MOVIE = 'movie',
  TV = 'tv'
}

export type Media = {
  id: number;
  title: string;
  overview: string;
  poster: string;
  banner: string;
  rating: number;
  genre: Genre[];
};

export type ImageType = 'poster' | 'original';

export type Section = {
  heading: string;
  endpoint: string;
  defaultCard?: boolean;
  topList?: boolean;
};
