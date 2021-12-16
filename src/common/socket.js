// Core
import io from 'socket.io-client';
import toastr from 'toastr';

// API
import { api } from '../api';

export const socket = io('https://lab.lectrum.io', {
    path: '/ws',
});

socket.on('connect', () => {
    toastr.success('Подключен к сокету', 'Онлайн');
});

socket.on('disconnect', () => {
    toastr.warning('Отключён от сокета', 'Оффлайн');
});

socket.on('login', (data) => {
    toastr.success(`Железный ⚔️ Банк: ${data}`, 'Логин');
});

socket.on('notification', (source) => {
    const { message } = JSON.parse(source);
    toastr.info(message, 'Уведомление');
});

socket.on('order', (source) => {
    const { title, description, amount } = JSON.parse(source);
    toastr.info(
        `<div>
            <p>Операция: ${title}</p>
            <p>Описание: ${description}</p>
            <p>Сумма: ${amount}</p>
        </div>`,
        'Уведомление'
    );
});

(async () => {
    try {
        const { email } = await api.auth.getProfile();
        socket.emit('login', `ironbank:${email}`);
    } catch ({ message }) {
        toastr.error(message, 'Ошибка');
    }
})();
