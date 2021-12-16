// API
import { api } from '../../../api';

// eslint-disable-next-line consistent-return
(async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return false;
    }

    const isValid = await api.auth.checkToken(token);

    if (isValid) {
        window.location.href = 'cards.html';

        return null;
    }

    if (!window.location.href.includes('index.html') && !window.location.href.endsWith('/')) {
        window.location.href = 'index.html';
    }
})();
