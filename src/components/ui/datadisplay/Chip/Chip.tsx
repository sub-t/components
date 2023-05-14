import { slate } from '@radix-ui/colors';
import { styled } from '/stitches.config';

export const Chip = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  padding: '6px 12px',
  borderRadius: '99px',
  fontSize: '0.8125rem',
  color: slate.slate12,
  backgroundColor: slate.slate4,
});
