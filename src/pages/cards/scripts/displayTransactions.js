// API
import { api } from '../../../api';

// Helpers
import {
    generateTransactionItem,
} from '../../../common';

// Elements
import {
    cardTransactions, downloadPlaceHolder, transactionsWrapper,
} from './elements';

export const displayTransactions = async (cardNumber) => {
    downloadPlaceHolder.style.display = 'block';
    cardTransactions.style.display = 'none';

    const cardDetails = await api.orders.getOrders(cardNumber);

    const currentMonth = new Date().getMonth();
    const filteredData = cardDetails.filter((item) => {
        return currentMonth === new Date(item.created).getMonth();
    });

    const transactionsHTML = filteredData.map(generateTransactionItem).join('');

    transactionsWrapper.innerHTML = null;
    transactionsWrapper.insertAdjacentHTML('afterbegin', transactionsHTML);

    downloadPlaceHolder.style.display = 'none';
    cardTransactions.style.display = 'block';
};
