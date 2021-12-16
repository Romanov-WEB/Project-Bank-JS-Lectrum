// API
import { api } from '../../../api';

// Elements
import {
    menuCardsWrapper, cardsWrapper, cardDropDownList, cardPaySystem,
} from './elements';

// Helpers
import { generateCards, generateDropDownCards } from './helpers';
import { setupMenuCads } from '../../../common';

// Storage
import { storage } from './storage';

export const loadCards = async () => {
    const data = await api.cards.read();
    const cards = data.map((item) => generateCards(item)).join('');
    const cardsList = data.map((item) => generateDropDownCards(item)).join('');

    await setupMenuCads(menuCardsWrapper, data);

    storage.set('card', data[0].card);
    cardPaySystem.setAttribute('data-card-num', data[0].card);

    cardsWrapper.innerHTML = null;
    cardsWrapper.insertAdjacentHTML('afterbegin', cards);

    cardDropDownList.innerHTML = null;
    cardDropDownList.insertAdjacentHTML('afterbegin', cardsList);

    localStorage.setItem('cards', JSON.stringify(data));
};

loadCards().catch(({ message }) => {
    // eslint-disable-next-line no-console
    console.error(message);
});
