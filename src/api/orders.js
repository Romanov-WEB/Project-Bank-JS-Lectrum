import { baseUrl } from './index';

export const orders = {
    create: async (order) => {
        const token = localStorage.getItem('token');

        const response = await fetch(`${baseUrl}/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-token': token,
            },
            body: JSON.stringify(order),
        });

        const { data, message } = await response.json();

        if (!response.ok) {
            const errorMessage = message || 'не удалось провести операцию';

            throw new Error(errorMessage);
        }

        return data;
    },
    getOrders: async (cardNum) => {
        const token = localStorage.getItem('token');

        const response = await fetch(`${baseUrl}/orders/${cardNum}`, {
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
