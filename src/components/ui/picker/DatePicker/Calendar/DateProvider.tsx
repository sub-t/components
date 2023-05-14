// https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj
import { WithChildren } from '@/types/common';
import { createContext } from '@/utils/createContext';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useMemo, useState } from 'react';

type DateContext = {
  currentDate: Dayjs;
  weeksOfTheMonth: Date[][];
  forwardMonth: () => void;
  backwardMonth: () => void;
};

const [useDate, SetDateProvider] = createContext<DateContext>();

const DateProvider = ({ children }: WithChildren) => {
  const value = useDateContext();
  return <SetDateProvider value={value}>{children}</SetDateProvider>;
};

export { useDate, DateProvider };

const useDateContext = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

  const firstDayOfTheMonth = useMemo(
    () => currentDate.clone().startOf('month'),
    [currentDate],
  );

  const firstDayOfFirstWeekOfMonth = useMemo(
    () => dayjs(firstDayOfTheMonth).startOf('week'),
    [firstDayOfTheMonth],
  );

  const generateFirstDayOfEachWeek = useCallback((day: Dayjs): Dayjs[] => {
    const dates: Dayjs[] = [day];
    for (let i = 1; i < 6; i++) {
      const date = day.clone().add(i, 'week');
      if (i >= 4 && date.date() <= 8) continue;
      dates.push(date);
    }
    return dates;
  }, []);

  const generateWeek = useCallback((day: Dayjs): Date[] => {
    const dates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const date = day.clone().add(i, 'day').toDate();
      dates.push(date);
    }
    return dates;
  }, []);

  const weeksOfTheMonth = useMemo((): Date[][] => {
    const firstDayOfEachWeek = generateFirstDayOfEachWeek(
      firstDayOfFirstWeekOfMonth,
    );
    return firstDayOfEachWeek.map((date) => generateWeek(date));
  }, [generateFirstDayOfEachWeek, firstDayOfFirstWeekOfMonth, generateWeek]);

  const forwardMonth = useCallback(
    () => setCurrentDate((date) => date.add(1, 'month')),
    [],
  );
  const backwardMonth = useCallback(
    () => setCurrentDate((date) => date.subtract(1, 'month')),
    [],
  );

  return {
    currentDate,
    weeksOfTheMonth,
    forwardMonth,
    backwardMonth,
  };
};
