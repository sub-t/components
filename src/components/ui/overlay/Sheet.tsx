import { CommonProps } from '@/types/common';
import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog';
import { ElementRef, ReactNode, forwardRef } from 'react';
import { VariantProps, keyframes, styled } from 'stitches.config';

type Props = CommonProps &
  VariantProps<typeof StyledContent> & {
    trigger?: ReactNode;
    open?: boolean;
    onClose?: () => void;
  };

const Sheet = forwardRef<ElementRef<typeof Content>, Props>(function Sheet(
  { children, trigger, open, onClose, side },
  ref,
) {
  return (
    <Root open={open}>
      {trigger && <Trigger asChild>{trigger}</Trigger>}
      <Portal>
        <StyledOverlay onClick={onClose} />
        <StyledContent ref={ref} side={side}>
          {children}
        </StyledContent>
      </Portal>
    </Root>
  );
});

const SheetTrigger = Trigger;
const SheetClose = Close;
const SheetTitle = Title;
const SheetDescription = Description;

export { Sheet, SheetTrigger, SheetClose, SheetTitle, SheetDescription };

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

const fadeOut = keyframes({
  from: { opacity: '1' },
  to: { opacity: '0' },
});

const StyledOverlay = styled(Overlay, {
  zIndex: '$overlay',
  position: 'fixed',
  inset: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${fadeOut} 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
});

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' },
});

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' },
});

const StyledContent = styled(Content, {
  zIndex: '$modal',
  position: 'fixed',
  top: 0,
  bottom: 0,
  backgroundColor: 'white',

  willChange: 'transform',
  '&[data-state="open"]': {
    animation: `${slideIn} 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideOut} 300ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        width: '100%',
        bottom: 'auto',
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0,
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        bottom: 0,
        top: 'auto',
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0,
      },
    },
  },

  defaultVariants: {
    side: 'left',
  },
});
