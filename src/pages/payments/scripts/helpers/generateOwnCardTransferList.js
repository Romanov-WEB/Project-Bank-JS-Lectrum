// Elements
import {
    cardPaySystem, ownCardsDropDownWrapper, paySystem, paySystemIcon,
} from '../elements';

// Helpers
import { generateDropDownCards } from './';
import { upperCaseFirstLetter } from '../../../../common';

// eslint-disable-next-line consistent-return
export const generateOwnCardTransferList = () => {
    const selectedCard = cardPaySystem.getAttribute('data-card-num');
    const data = JSON.parse(localStorage.getItem('cards'));

    const filteredCards = data.filter(({ card }) => card !== selectedCard);

    if (!filteredCards.length) {
        return null;
    }

    const cardsHTML = filteredCards.map(generateDropDownCards).join('');

    ownCardsDropDownWrapper.innerHTML = null;
    ownCardsDropDownWrapper.insertAdjacentHTML('afterbegin', cardsHTML);

    const { card, system } = filteredCards[0];
    paySystem.setAttribute('data-card-num', card);
    paySystem.value = upperCaseFirstLetter(system);
    paySystemIcon.src = `img/icon/${system}-icon.svg`;
};
