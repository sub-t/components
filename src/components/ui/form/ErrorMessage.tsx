import { WithCss } from '@/types/common';
import { red } from '@radix-ui/colors';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { styled } from 'stitches.config';

type Props = ComponentPropsWithoutRef<'p'> & WithCss;

export const ErrorMessage = forwardRef<HTMLParagraphElement, Props>(
  function ErrorMessage(props, ref) {
    return (
      <StyledErrorMessage {...props} ref={ref} role="alert" aria-live="off" />
    );
  },
);

export const StyledErrorMessage = styled('p', {
  flexGrow: 1,
  marginTop: '0.25rem',
  fontSize: '0.85rem',
  color: red.red10,
});
