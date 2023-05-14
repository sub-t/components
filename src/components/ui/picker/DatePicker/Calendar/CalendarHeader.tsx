// https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj
import '@fontsource/anek-telugu';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useDate } from './DateProvider';
import { styled } from '/stitches.config';

export const CalendarHeader = () => {
  const { currentDate, forwardMonth, backwardMonth } = useDate();

  return (
    <Wrapper>
      <h3>{currentDate.clone().format('MMM YYYY')}</h3>
      <div>
        <Button onClick={backwardMonth}>
          <MdKeyboardArrowLeft size={25} />
        </Button>
        <Button onClick={forwardMonth}>
          <MdKeyboardArrowRight size={25} />
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Button = styled('button', {});
