import { WithCss } from '@/types/common';
import { mauve, violet } from '@radix-ui/colors';
import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { BsCheck } from 'react-icons/bs';
import { styled } from 'stitches.config';

type Props = ComponentPropsWithoutRef<typeof CheckboxItem> & WithCss;

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof CheckboxItem>,
  Props
>(function DropdownMenuCheckboxItem({ children, ...props }, ref) {
  return (
    <StyledCheckboxItem {...props} ref={ref}>
      <StyledItemIndicator>
        <BsCheck />
      </StyledItemIndicator>
      {children}
    </StyledCheckboxItem>
  );
});

const StyledCheckboxItem = styled(CheckboxItem, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
});

const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});
