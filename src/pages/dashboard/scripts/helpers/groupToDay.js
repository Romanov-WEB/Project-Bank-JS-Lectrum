import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const groupToDay = (group, day) => {
    return {
        day: format(new Date(Number(day)), 'dd LLL', { locale: ru }),
        times: group,
    };
};
