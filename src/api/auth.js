import { baseUrl } from './';

export const auth = {
    getProfile: async () => {
        const token = localStorage.getItem('token');

        const response = await fetch(`${baseUrl}/profile`, {
            method: 'GET',
            headers: {
                'x-token': token,
            },
        });

        const { data, message } = await response.json();

        if (!response.ok) {
            const errorMessage = message || 'не удалось получить профиль пользователя';

            throw new Error(errorMessage);
        }

        return data;
    },
    checkToken: async (token) => {
        try {
            const response = await fetch(`${baseUrl}/auth`, {
                method: 'GET',
                headers: {
                    'x-token': token,
                },
            });

            if (!response.ok) {
                throw new Error('не удалось аутентифицироваться');
            }

            return true;
        } catch (error) {
            return false;
        }
    },
    login: async (user) => {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const { data, message } = await response.json();

        if (!response.ok) {
            const errorMessage = message || 'не удалось залогиниться';

            throw new Error(errorMessage);
        }

        return data;
    },
    registration: async (user) => {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        const { data, message } = await response.json();

        if (!response.ok) {
            const errorMessage = message || 'не удалось зарегистрироваться';

            throw new Error(errorMessage);
        }

        return data;
    },
};
