// Core
import _ from 'lodash';

// Other
import { occurrenceDay } from './occurrenceDay';
import { groupToDay } from './groupToDay';

export const getAllCardChartData = (data) => {
    const result = _.chain(data)
        .groupBy(occurrenceDay)
        .map(groupToDay)
        .value();

    const headers = result.map(({ day }) => day);
    const values = result.map(({ times }) => {
        const sum = times.reduce((aucm, { operation, amount }) => {
            if (operation === 'credit') {
                aucm -= amount;
            } else if (operation === 'debet') {
                aucm += amount;
            }
            return aucm;
        }, 0);

        return sum;
    });

    return {
        headers,
        values,
    };
};
