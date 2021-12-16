// Elements
import {
    mobileForm, utilityBills, clientCard, ownCard,
} from './elements';

// Helpers
import { generateOwnCardTransferList } from './helpers';

// Storage
import { storage } from './storage';

export const switchFrom = (formId) => {
    storage.reset();

    switch (formId) {
        case 'communal': {
            utilityBills.style.display = 'block';
            mobileForm.style.display = 'none';
            clientCard.style.display = 'none';
            storage.set('title', 'Оплата коммуналки');

            break;
        }
        case 'mobile': {
            mobileForm.style.display = 'block';
            utilityBills.style.display = 'none';
            clientCard.style.display = 'none';
            storage.set('title', 'Пополнение мобильного');

            break;
        }
        case 'otherCard': {
            clientCard.style.display = 'block';
            utilityBills.style.display = 'none';
            mobileForm.style.display = 'none';
            ownCard.style.display = 'none';
            storage.set('title', 'Пополнение карты');

            break;
        }
        case 'typeOwnCard': {
            generateOwnCardTransferList();
            ownCard.style.display = 'block';
            utilityBills.style.display = 'none';
            mobileForm.style.display = 'none';
            clientCard.style.display = 'none';
            storage.set('title', 'Пополнение карты');

            break;
        }
        default: {
            throw new Error(`Неизвестный тип формы ${formId}`);
        }
    }
};
