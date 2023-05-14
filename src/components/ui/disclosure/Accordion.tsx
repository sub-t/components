import { slate } from '@radix-ui/colors';
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from '@radix-ui/react-accordion';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { CSS, keyframes, styled } from 'stitches.config';

export const Accordion = styled(Root, {
  userSelect: 'none',
  overflow: 'hidden',
  borderRadius: '0.375rem',
});

type ItemProps = React.ComponentPropsWithoutRef<typeof StyledItem> & {
  title?: string;
  triggerStyles?: CSS;
};

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  ItemProps
>(function AccordionItem(
  { children, title, value, triggerStyles, ...props },
  ref,
) {
  return (
    <StyledItem value={value} {...props} ref={ref}>
      <Header>
        <StyledTrigger css={triggerStyles}>
          {title ?? value}
          <StyledChevron aria-hidden />
        </StyledTrigger>
      </Header>
      <StyledContent>{children}</StyledContent>
    </StyledItem>
  );
});

const StyledItem = styled(Item, {});

const StyledTrigger = styled(Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  py: '0.4rem',
  px: '0.8rem',
  lineHeight: 1,
  fontSize: 15,
  fontWeight: 600,
  color: slate.slate12,
  cursor: 'pointer',
});

const StyledChevron = styled(BsChevronDown, {
  color: slate.slate11,
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state="open"] > &': { transform: 'rotate(180deg)' },
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledContent = styled(Content, {
  overflow: 'hidden',
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});
