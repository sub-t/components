import { WithCss } from '@/types/common';
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

export const StyledErrorMessage = styled('p', {});
