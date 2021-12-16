// API
import { api } from '../../../api';

// Helpers
import { generateCards } from './helpers';

// Elements
import { cardBalance } from './elements';

// Other
import { loadCardTransactions } from './helpers';

// eslint-disable-next-line consistent-return
export const loadCards = async () => {
    const data = await api.cards.read();

    if (!data.length) {
        return null;
    }

    const cardsHTML = data.map(generateCards).join('');

    cardBalance.innerHTML = null;
    cardBalance.insertAdjacentHTML('afterbegin', cardsHTML);

    await loadCardTransactions(data);
    localStorage.setItem('cards', JSON.stringify(data));
};

loadCards().catch(({ message }) => {
    // eslint-disable-next-line no-console
    console.error(message);
});
