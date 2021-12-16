// Core
import _ from 'lodash';

// Other
import { occurrenceDay } from './occurrenceDay';
import { groupToDay } from './groupToDay';

export const getIncomeOutcomeChartData = (source) => {
    const data = source.flat(Infinity);
    const result = _.chain(data)
        .groupBy(occurrenceDay)
        .map(groupToDay)
        .value();

    const headers = result.map(({ day }) => day);
    const income = [];
    const outcome = [];

    for (const day of result) {
        const graterThanZero = day.times
            .filter(({ operation }) => operation === 'debet')
            .reduce((acum, { amount }) => acum + amount, 0);
        const belowZero = day.times.filter(({ operation }) => operation === 'credit')
            .reduce((acum, { amount }) => acum + amount, 0);

        income.push(graterThanZero);
        outcome.push(belowZero);
    }

    return {
        headers,
        income,
        outcome,
    };
};
