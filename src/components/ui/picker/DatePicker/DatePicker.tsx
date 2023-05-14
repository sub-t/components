// https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj
import '@fontsource/anek-telugu';
import { BsCalendar } from 'react-icons/bs';
import { IconButton } from '../../form';
import { Popover } from '../../overlay';
import { Calendar } from './Calendar';

export type DatePickerProps = {
  onClick: (date: Date) => void;
};

export const DatePicker = ({ onClick }: DatePickerProps) => {
  return (
    <Popover
      trigger={
        <IconButton>
          <BsCalendar />
        </IconButton>
      }
    >
      <Calendar onClick={onClick} />
    </Popover>
  );
};
