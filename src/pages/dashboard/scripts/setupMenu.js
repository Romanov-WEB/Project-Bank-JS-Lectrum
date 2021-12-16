// API
import { api } from '../../../api';

// Elements
import {
    incomeOutcomeTab, allCardsTab, incomeOutcome, allCards, downloadPlaceholder, menuTitle,
} from './elements';

// Other
import { buildIncomeOutcomeChart } from './buildIncomeOutcomeChart';
import { buildAllCardsChart } from './buildAllCardsChart';
import { loadCardTransactions } from './helpers';

incomeOutcomeTab.addEventListener('click', async () => {
    menuTitle.innerHTML = 'Сводная статистика по доходам и расходам';
    allCards.style.display = 'none';
    downloadPlaceholder.style.display = 'block';

    const data = await api.cards.read();
    const transactions = await loadCardTransactions(data);

    buildIncomeOutcomeChart(transactions);

    downloadPlaceholder.style.display = 'none';
    incomeOutcome.style.display = 'block';

    incomeOutcomeTab.classList.add('active');
    allCardsTab.classList.remove('active');
});

allCardsTab.addEventListener('click', async () => {
    menuTitle.innerHTML = 'Динамика изменения баланса карт';
    incomeOutcome.style.display = 'none';
    downloadPlaceholder.style.display = 'block';

    const data = await api.cards.read();
    const transactions = await loadCardTransactions(data);

    buildAllCardsChart(transactions, data);

    downloadPlaceholder.style.display = 'none';
    allCards.style.display = 'block';

    allCardsTab.classList.add('active');
    incomeOutcomeTab.classList.remove('active');
});
