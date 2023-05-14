// https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj
import '@fontsource/anek-telugu';
import { useState } from 'react';
import { styled } from 'stitches.config';
import { DatePickerProps } from '../DatePicker';
import { CalendarContent } from './CalendarContent';
import { CalendarHeader } from './CalendarHeader';
import { DateProvider } from './DateProvider';

type Props = DatePickerProps;

export const Calendar = (props: Props) => {
  const { onClick } = props;
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();

  return (
    <Root>
      <DateProvider>
        <CalendarHeader />
        <CalendarContent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          onClick={onClick}
        />
      </DateProvider>
    </Root>
  );
};

export const Root = styled('div', {
  width: 'max-content',
  borderRadius: 10,
  padding: 20,
  backgroundColor: 'white',
  fontFamily: 'Anek Telugu',
});
