// Core
import toastr from 'toastr';

// Other
import './cardTypeDropDown';
import './currencyDropDown';

// Elements
import { form } from './elements';

// API
import { api } from '../../../api';

// Schemas
import { cardSchema } from './schemas';

// eslint-disable-next-line consistent-return
form?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const system = form.querySelector('input[name="cardType"]')?.getAttribute('data-type');
    const currency = form.querySelector('input[name="currency"]')?.getAttribute('data-cur');
    const cardClass = form.querySelector('input[name="cardClass"]:checked + label')?.textContent;

    const issuer = formData.get('issuer');
    const description = formData.get('cardDescr');

    const terms = form.querySelector('input[name="terms"]:checked');

    if (!terms) {
        toastr.error('Для создания карты вам необходимо принять положения банка.', 'Положения банка');

        return false;
    }

    const card = {
        issuer,
        system,
        currency,
        class: cardClass.toLowerCase(),
        description,
    };

    try {
        const value = await cardSchema.validateAsync(card);
        await api.cards.create(value);

        window.location.href = 'cards.html';
    } catch ({ message }) {
        toastr.error(message, 'Ошибка');
    }
});
