// Helpers
import { upperCaseFirstLetter } from './upperCaseFirstLetter';

export const generateMenuCards = (cardTitle, system) => {
    const upperCased = upperCaseFirstLetter(cardTitle);

    return `
        <a href="cards.html" class="card__item">
            <img class="card__item__logo" src="img/icon/${system === 'visa' ? 'visa-icon.svg' : 'mastercard-icon.svg'}" alt="">
            <span class="card__item__name">
                ${upperCased}
            </span>
        </a>`;
};
