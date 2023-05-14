import { WithChildren } from '@/types/common';
import { amber, green, red, sky } from '@radix-ui/colors';
import { BsExclamationCircle, BsExclamationTriangle } from 'react-icons/bs';
import { GiFireBomb } from 'react-icons/gi';
import { GoLightBulb } from 'react-icons/go';
import { CSS, styled } from 'stitches.config';

type Type = 'note' | 'warning' | 'important' | 'caution';

type Props = WithChildren & {
  type: Type;
};

export const Admonition = ({ type, children }: Props) => {
  return (
    <AdmonitionRoot type={type}>
      <AdmonitionHeading>
        <AdmonitionIcon>{icons[type]}</AdmonitionIcon>
        {titles[type]}
      </AdmonitionHeading>
      <AdmonitionContent>{children}</AdmonitionContent>
    </AdmonitionRoot>
  );
};

const icons: Record<Type, React.ReactElement> = {
  note: <GoLightBulb />,
  warning: <GiFireBomb />,
  important: <BsExclamationCircle />,
  caution: <BsExclamationTriangle />,
};

const titles: Record<Type, string> = {
  note: 'Note',
  warning: 'Warning',
  important: 'Important',
  caution: 'Translation Note',
};

const typeVariants: Record<Type, CSS> = {
  note: {
    borderColor: green.green11,
    color: green.green12,
    backgroundColor: green.green3,
  },
  warning: {
    borderColor: red.red11,
    color: red.red12,
    backgroundColor: red.red3,
  },
  important: {
    borderColor: sky.sky11,
    color: sky.sky12,
    backgroundColor: sky.sky3,
  },
  caution: {
    borderColor: amber.amber11,
    color: amber.amber12,
    backgroundColor: amber.amber3,
  },
};

const AdmonitionRoot = styled('div', {
  p: '1rem',
  mt: '1.5rem',
  borderWidth: 0,
  borderLeftWidth: '0.375rem',
  borderStyle: 'solid',
  borderRadius: '0.375rem',

  variants: {
    type: typeVariants,
  },

  defaultVariants: {
    type: 'note',
  },
});

const AdmonitionHeading = styled('div', {
  mb: '0.3rem',
  lineHeight: 1,
  fontSize: '0.875rem',
  fontWeight: 700,
});

const AdmonitionIcon = styled('span', {
  display: 'inline-block',
  mr: '0.4rem',
  verticalAlign: 'middle',
  fontSize: '1.125rem',
});

const AdmonitionContent = styled('div', {
  fontWeight: 500,
  '& > p': {
    m: 0,
    fontWeight: 'inherit',
  },
});
