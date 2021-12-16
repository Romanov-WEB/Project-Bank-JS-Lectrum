// Core
import toastr from 'toastr';

// API
import { api } from '../api';

const pageHeader = document.querySelector('p.page__header__username');

if (pageHeader) {
    (async () => {
        try {
            const { name } = await api.auth.getProfile();

            pageHeader.innerHTML = name;
        } catch ({ message }) {
            toastr.error(message, 'Ошибка');
        }
    })();
}
