// API
import { api } from '../../../../api';

// eslint-disable-next-line consistent-return
export const loadCardTransactions = async (cards) => {
    if (!Array.isArray(cards)) {
        throw new Error('Невозможно загрузить транзакции по карточкам. Не верные данные');
    }

    const promises = cards.map(({ card }) => api.orders.getOrders(card));

    // eslint-disable-next-line no-undef
    const transactions = await Promise.all(promises);

    if (!transactions.length) {
        return null;
    }

    return transactions;
};
