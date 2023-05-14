import { WithCss } from '@/types/common';
import NextLink from 'next/link';
import { ElementRef, forwardRef } from 'react';
import { styled } from 'stitches.config';

type Props = Omit<React.ComponentPropsWithoutRef<typeof NextLink>, 'href'> &
  WithCss & {
    href: string;
  };

export const Link = forwardRef<ElementRef<typeof NextLink>, Props>(
  function Link({ children, href, ...props }: Props) {
    return href.startsWith('http') ? (
      <StyledLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </StyledLink>
    ) : (
      <StyledLink href={href} {...props}>
        {children}
      </StyledLink>
    );
  },
);

const StyledLink = styled(NextLink, {
  textDecoration: 'none',
  color: 'Black',
});
