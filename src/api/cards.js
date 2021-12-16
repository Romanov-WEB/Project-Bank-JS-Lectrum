import { baseUrl } from './';

export const cards = {
    create: async (card) => {
        const token = localStorage.getItem('token');

        const response = await fetch(`${baseUrl}/cards`, {
            method: 'POST',
            headers: {
                'x-token': token,
                'content-type': 'application/json',
            },
            body: JSON.stringify(card),
        });

        const { data, message } = await response.json();

        if (!response.ok) {
            const errorMessage = message || 'не удалось создать карту';

            throw new Error(errorMessage);
        }

        return data;
    },
    read: async () => {
        const token = localStorage.getItem('token');

        const response = await fetch(`${baseUrl}/cards`, {
            method: 'GET',
            headers: {
                'x-token': token,
            },
        });

        const { data, message } = await response.json();

        if (!response.ok) {
            const errorMessage = message || 'не удалось получить список карт';

            throw new Error(errorMessage);
        }

        return data;
    },
};
