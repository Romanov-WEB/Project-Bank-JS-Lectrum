// Helpers
import { upperCaseFirstLetter, getCurrencySymbol } from '../../../../common';

export const generateCards = (data) => {
    const {
        balance, card, system, description, currency,
    } = data;

    const formattedCard = card.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
    const cardParts = formattedCard.split(/\s/gi);
    const maskedCard = `${cardParts[0]} **** **** ${cardParts[cardParts.length - 1]}`;

    return `
         <div class="card__balance card__balance__item">
            <img src="img/icon/${system === 'visa' ? 'visa-icon.svg' : 'mastercard-icon.svg'}" class="card__balance__icon" alt="${system}">
            <div>
                <p class="card__balance__type">${upperCaseFirstLetter(description)}</p>
                <p class="card__balance__number">${maskedCard}</p>
            </div>
            <p class="card__balance__data">${getCurrencySymbol(currency)} ${balance}</p>
            <img src="img/icon/increase-icon.svg" class="card__balance__status" alt="balance">
        </div>`;
};
