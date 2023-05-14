import { WithCss } from '@/types/common';
import { violet } from '@radix-ui/colors';
import { Arrow, Content, Portal, Root, Trigger } from '@radix-ui/react-popover';
import React from 'react';
import { keyframes, styled } from 'stitches.config';

type Props = React.ComponentPropsWithoutRef<typeof Content> &
  WithCss & {
    trigger: React.ReactNode;
  };

export const Popover = React.forwardRef<
  React.ElementRef<typeof Content>,
  Props
>(function PopoverDemo({ children, trigger, forceMount, ...props }, ref) {
  return (
    <Root>
      <Trigger asChild>{trigger}</Trigger>
      <Portal forceMount={forceMount}>
        <PopoverContent {...props} ref={ref} forceMount={forceMount}>
          {children}
          <PopoverArrow />
        </PopoverContent>
      </Portal>
    </Root>
  );
});

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const PopoverContent = styled(Content, {
  zIndex: '$popover',
  borderRadius: 4,
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
  '&:focus': {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
  },
});

const PopoverArrow = styled(Arrow, {
  fill: 'white',
});
