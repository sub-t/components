import { WithCss } from '@/types/common';
import { slate } from '@radix-ui/colors';
import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { styled } from 'stitches.config';

type Props = ComponentPropsWithoutRef<typeof Viewport> & WithCss;

export const ScrollArea = forwardRef<ElementRef<typeof Viewport>, Props>(
  function ScrollArea({ children, ...props }, ref) {
    return (
      <ScrollAreaRoot>
        <ScrollAreaViewport {...props} ref={ref}>
          {children}
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    );
  },
);

const SCROLLBAR_SIZE = 6;

const ScrollAreaRoot = styled(Root, {
  overflow: 'hidden',
  width: '100%',
  height: '100%',
});

const ScrollAreaViewport = styled(Viewport, {
  width: '100%',
  height: '100%',
});

const ScrollAreaScrollbar = styled(Scrollbar, {
  userSelect: 'none',
  touchAction: 'none',
  display: 'flex',
  backgroundColor: slate.slate4,
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const ScrollAreaThumb = styled(Thumb, {
  flex: 1,
  borderRadius: SCROLLBAR_SIZE,
  background: slate.slate8,

  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});
