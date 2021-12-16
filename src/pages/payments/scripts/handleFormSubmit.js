// Core
import toastr from 'toastr';

// API
import { api } from '../../../api';

// Elements
import { form } from './elements';

// Storage
import { storage } from './storage';

// Other
import { switchFrom } from './switchFrom';
import { loadCards } from './loadCards';
import { loadTransactions } from './loadTransactions';

// Elements
import { paySystem } from './elements';

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const mobileContactName = formData.get('mobileContactName');
    const totalSum = Number(formData.get('totalSum'));
    const utilityTotalSum = Number(formData.get('utilityTotalSum'));
    const totalTransferSum = Number(formData.get('totalTransferSum'));
    const ownTotalSum = Number(formData.get('ownTotalSum'));
    const address = formData.get('address');
    const service = formData.get('service');
    const contactCard = formData.get('contactCard');
    const ownCard = paySystem.getAttribute('data-card-num');

    storage.set('operation', 'debet');

    if (mobileContactName) {
        storage.set('description', mobileContactName);
    }

    if (totalSum && !Number.isNaN(totalSum)) {
        storage.set('amount', totalSum);
    }

    if (utilityTotalSum && !Number.isNaN(utilityTotalSum)) {
        storage.set('amount', utilityTotalSum);
    }

    if (address && service) {
        storage.set('description', `Адрес: ${address}. Услуга: ${service}`);
    }

    if (contactCard) {
        storage.set('transfer', contactCard);
        storage.set('description', `Перевод на карту контрагента ${contactCard}`);
    }

    if (totalTransferSum) {
        storage.set('amount', totalTransferSum);
    }

    if (ownTotalSum) {
        storage.set('amount', ownTotalSum);
        storage.set('description', `Перевод на свою карту ${ownCard}`);
        storage.set('transfer', ownCard);
    }

    const data = storage.getData();

    try {
        await api.orders.create(data);
        form.reset();
        switchFrom('mobile');
        // eslint-disable-next-line no-undef
        await Promise.all([
            loadCards(),
            loadTransactions(),
        ]);
    } catch ({ message }) {
        toastr.error(message, 'Ошибка платежа');
    }
});
