// Core
import { format } from 'date-fns';

// Helpers
import { getCurrencySymbol, upperCaseFirstLetter } from '../../../../common';

export const generateCard = (index, data) => {
    const {
        balance, card, system, issuer, valid, iban,
        description,
        class: cardClass, limit, internet, security3d, currency,
    } = data;
    const formattedCard = card.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
    const cardParts = formattedCard.split(/\s/gi);
    const lastFourDigits = cardParts[cardParts.length - 1];
    const cardValidDate = format(new Date(valid), 'MM / yy');
    const cardTypeClass = `${upperCaseFirstLetter(system)} ${upperCaseFirstLetter(cardClass)}`;

    return `
        <div data-card="${card}" class="card__info__item ${index !== 0 ? 'collapsed' : ''}">
            <div class="card__info__header">
                <img src="img/icon/${system === 'visa' ? 'visa-icon.svg' : 'mastercard-icon.svg'}" alt="" class="card__info__icon">
                <p class="card__info__data">${description} ** ${lastFourDigits}</p>
                <p class="card__info__balance">${getCurrencySymbol(currency)} ${balance}</p>
                <img src="img/icon/arr-bottom.svg" class="arr__icon" alt="">
            </div>
            <div class="card__info__main">
                <div class="card__info__card">
                    <img src="img/card-back.jpg" class="card__back" alt="">
                    <img src="img/icon/${system === 'visa' ? 'visa-white.svg' : 'mastercard-icon-small.svg'}" class="card__type" alt="system">
                    <p class="card__number">${formattedCard}</p>
                    <p class="card__owner__name">${issuer}</p>
                    <p class="card__exp__date">${cardValidDate}</p>
                </div>
                <div class="card__info__settings">
                    <div class="data-item">
                        <p class="legend">Класс карты</p>
                        <p class="data">${cardTypeClass}</p>
                    </div>
                    <div class="data-item">
                        <p class="legend">IBAN-номер</p>
                        <p class="data">${iban}</p>
                    </div>
                    <div class="data-item">
                        <p class="legend">Кредитный лимит</p>
                        <p class="data">${ Number(limit) === 0 ? 'Отсутствует' : `$${limit}` }</p>
                    </div>
                    <div class="data-item">
                        <p class="legend">Покупки в интернете</p>
                        <!-- Для того что бы "включить switch нужно добавить к классу switch__block класс checked" -->
                        <div class="switch__block internet__switch__block ${internet ? 'checked' : '' }">
                            <div class="switcher "></div>
                            <input type="checkbox" id="internetPayments">
                        </div>
                    </div>
                    <div class="data-item">
                        <p class="legend">3D Security</p>
                        <!-- Для того что бы "включить switch нужно добавить к классу switch__block класс checked" -->
                        <div class="switch__block security__switch__block  ${security3d ? 'checked' : '' }">
                            <div class="switcher "></div>
                            <input type="checkbox" id="security3D">
                        </div>
                    </div>
                    <div class="other__settings">
                        <img class="settings__icon" src="img/icon/dots-icon.svg" alt="">
                        <p class="settings__name">Операции над картой</p>
                    </div>
                </div>
            </div>
        </div>`;
};
