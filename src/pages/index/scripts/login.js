// Core
import toastr from 'toastr';

// API
import { api } from '../../../api';

// Elements
import { loginForm } from './elements';

// Other
import { loginSchema } from './schemas';

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
        const value = await loginSchema.validateAsync({ email, password });
        const token = await api.auth.login(value);

        localStorage.setItem('token', token);

        window.location.href = 'cards.html';
    } catch ({ message }) {
        toastr.error(message);
    }
});
