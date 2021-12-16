// API
import { api } from '../../../api';

// Helpers
import {
    generateTransactionItem,
} from '../../../common';

// Elements
import { transactionsWrapper } from './elements';

// eslint-disable-next-line consistent-return
export const loadTransactions = async () => {
    const cards = await api.cards.read();

    if (!Array.isArray(cards) || !cards.length) {
        return null;
    }

    const ordersApiCalls = cards.map(({ card }) => api.orders.getOrders(card));
    // eslint-disable-next-line no-undef
    const source = (await Promise.all(ordersApiCalls)).flat(Infinity);
    const data = source.sort((a, b) => new Date(a.created) < new Date(b.created) ? 1 : -1);

    if (!Array.isArray(data) || !data.length) {
        return null;
    }

    const lastTransactions = data.slice(0, 5);
    const transactionsHTML = lastTransactions.map(generateTransactionItem).join('');

    transactionsWrapper.innerHTML = null;
    transactionsWrapper.insertAdjacentHTML('afterbegin', transactionsHTML);
};

loadTransactions().catch(({ message }) => {
    // eslint-disable-next-line no-console
    console.error(message);
});
