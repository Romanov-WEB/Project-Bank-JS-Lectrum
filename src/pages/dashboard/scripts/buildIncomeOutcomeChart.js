// Core
import { Chart } from 'chart.js';

// Elements
import { incomeOutcomeChart } from './elements';

// Helpers
import { generateRgbaSet, getIncomeOutcomeChartData } from './helpers';

export const buildIncomeOutcomeChart = (transactions) => {
    const ctx = incomeOutcomeChart.getContext('2d');
    const { headers, income, outcome } = getIncomeOutcomeChartData(transactions);
    const incomeColors = generateRgbaSet();
    const outcomeColors = generateRgbaSet();
    const incomeDataSet = {
        label: 'Доходы',
        data: income,
        backgroundColor: incomeColors.mainColor,
        borderColor: incomeColors.secondColor,
        borderWidth: 1,
    };
    const outcomeDataSet = {
        label: 'Расходы',
        data: outcome,
        backgroundColor: outcomeColors.mainColor,
        borderColor: outcomeColors.secondColor,
        borderWidth: 1,
    };

    // eslint-disable-next-line no-new
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: headers,
            datasets: [
                incomeDataSet,
                outcomeDataSet,
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
};
