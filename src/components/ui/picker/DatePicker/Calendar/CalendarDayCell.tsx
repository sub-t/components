// https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj
import { styled } from 'stitches.config';

export const CalendarDayCell = styled('button', {
  flexShrink: 0,
  height: 30,
  width: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 2,
  borderRadius: '100%',

  transitionDuration: '200ms',
  '&:hover': {
    backgroundColor: '#ddd',
  },

  variants: {
    variant: {
      default: {
        color: '#1B1B2F',
      },
      selected: {
        color: '#E43F5A',
      },
      nextMonth: {
        color: '#DAE1E7',
      },
    },
  },
});
