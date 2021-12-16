import { getCurrencySymbol } from './';

const getIcon = (type) => {
    switch (type) {
        case 'Пополнение': {
            return 'img/transaction/money-pig.svg';
        }
        case 'Оплата коммуналки': {
            return 'img/transaction/home.svg';
        }
        case 'Пополнение мобильного': {
            return 'img/transaction/phone.svg';
        }
        case 'Пополнение карты': {
            return 'img/transaction/atm.svg';
        }
        default: {
            return 'img/transaction/home.svg';
        }
    }
};

export const generateTransactionItem = (item) => {
    const {
        title, description, amount, operation, cur,
    } = item;

    return `
        <div class="transaction__item">
            <img class="transaction__item__icon" src="${getIcon(title)}" alt="${title}">
            <div>
                <p class="transaction__item__type">${title}</p>
                <p class="transaction__item__data">${description}</p>
            </div>
            <div class="transaction__item__value">${operation === 'debet' ? '-' : '' } ${getCurrencySymbol(cur)} ${amount}</div>
            <img src="img/icon/dots-icon.svg" class="transaction__item__more" alt="load more">
        </div>`;
};
