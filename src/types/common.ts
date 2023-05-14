import { PropsWithChildren } from 'react';
import { CSS } from '/stitches.config';

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

export type WithCss<T = {}> = T & {
  css?: CSS;
};

export type CommonProps<T = {}> = WithChildren<T> & WithCss<T>;
