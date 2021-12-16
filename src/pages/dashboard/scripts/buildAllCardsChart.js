// Core
import { Chart } from 'chart.js';

// Elements
import { allCardsChart } from './elements';

// Helpers
import { generateRgbaSet, getAllCardChartData } from './helpers';

export const buildAllCardsChart = (transactions, cards) => {
    const ctx = allCardsChart.getContext('2d');
    const dataForChart = transactions.map(getAllCardChartData);
    const datasets = dataForChart.map((item, index) => {
        const { mainColor, secondColor } = generateRgbaSet();
        const formattedCard = cards[index].card.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
        const cardParts = formattedCard.split(/\s/gi);
        const maskedCard = `${cardParts[0]} **** **** ${cardParts[cardParts.length - 1]}`;

        return {
            label: `Карта ${maskedCard}`,
            data: item.values,
            backgroundColor: mainColor,
            borderColor: secondColor,
            borderWidth: 1,
        };
    });

    // eslint-disable-next-line no-new
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dataForChart[0].headers,
            datasets,
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
