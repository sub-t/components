import { WithCss } from '@/types/common';
import {
  Arrow,
  Content,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
} from 'react';
import { keyframes, styled } from 'stitches.config';

type Props = ComponentPropsWithoutRef<typeof Content> &
  WithCss & {
    trigger: ReactNode;
  };

export const DropdownMenu = forwardRef<ElementRef<typeof Content>, Props>(
  function DropdownMenu({ children, trigger, ...props }, ref) {
    return (
      <Root>
        <Trigger asChild>{trigger}</Trigger>
        <Portal>
          <DropdownMenuContent {...props} ref={ref}>
            {children}
            <DropdownMenuArrow />
          </DropdownMenuContent>
        </Portal>
      </Root>
    );
  },
);

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

const contentStyles = {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
};

const DropdownMenuContent = styled(Content, contentStyles);
const DropdownMenuArrow = styled(Arrow, { fill: 'white' });
