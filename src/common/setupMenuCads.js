// API
import { api } from '../api';

// Helpers
import { generateMenuCards } from './generateMenuCards';

export const setupMenuCads = async (element, cards) => {
    const data = cards || await api.cards.read();

    const cardNames = data.map(({ description, system }) => generateMenuCards(description, system)).join('');

    element.innerHTML = null;
    element.insertAdjacentHTML('afterbegin', cardNames);
};
