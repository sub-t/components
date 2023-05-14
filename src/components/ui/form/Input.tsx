import { violet } from '@radix-ui/colors';
import { styled } from 'stitches.config';

export const Input = styled('input', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2rem',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: '1rem',
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});
