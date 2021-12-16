// Core
import toastr from 'toastr';

// API
import { api } from '../../../api';

// Elements
import { registrationForm } from './elements';

// Other
import { registrationSchema } from './schemas';

registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const password = formData.get('password');
    const terms = formData.get('terms');

    if (!terms) {
        toastr.warning('Вы должны принять положения Банка.');
        return;
    }

    try {
        const value = await registrationSchema.validateAsync({
            name, email, phone, password,
        });
        const token = await api.auth.registration(value);

        localStorage.setItem('token', token);

        registrationForm.reset();
        window.location.href = 'cards.html';
    } catch ({ message }) {
        toastr.error(message);
    }
});
