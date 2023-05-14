import { styled } from 'stitches.config';

export const Typography = styled('p', {
  variants: {
    variant: {
      h1: { fontSize: '3rem', fontWeight: 700 },
      h2: { lineHeight: '2.5rem', fontSize: '1.875rem', fontWeight: 700 },
      h3: { lineHeight: '2rem', fontSize: '1.5rem', fontWeight: 700 },
      h4: { lineHeight: '1.75rem', fontSize: '1.125rem', fontWeight: 700 },
      p: { lineHeight: '1.75rem', fontSize: '1rem', fontWeight: 400 },
    },
  },

  defaultVariants: {
    variant: 'p',
  },
});
