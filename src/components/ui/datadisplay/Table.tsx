import { slate } from '@radix-ui/colors';
import { css, styled } from 'stitches.config';

export const Tbody = styled('tbody', {
  width: '100%',
});
export const Tfoot = styled('tfoot', {});
export const Tr = styled('tr', {});

const cellStyles = css({
  py: '0.75rem',
  px: '1rem',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
  },
  defaultVariants: {
    align: 'start',
  },
});

export const Th = styled('th', cellStyles, {
  fontWeight: 'inherit',
});
export const Td = styled('td', cellStyles);

export const Thead = styled('thead', {
  backgroundColor: slate.slate12,
  [`& ${Th}`]: {
    color: slate.slate6,
  },
  [`& ${Td}`]: {
    color: slate.slate6,
  },
});

export const Table = styled('table', {
  borderSpacing: 0,
  borderCollapse: 'collapse',
  tableLayout: 'fixed',

  overflow: 'hidden',
  width: '100%',
  borderRadius: '0.375rem',
  fontSize: '0.9rem',
  fontWeight: 500,
  variants: {
    striped: {
      true: {
        [`& ${Tbody}`]: {
          [`& ${Tr}`]: {
            '&:nth-child(odd)': {
              backgroundColor: slate.slate2,
            },
          },
        },
      },
    },
  },
});
