import { auth } from './auth';
import { cards } from './cards';
import { orders } from './orders';

export const baseUrl = 'https://lab.lectrum.io/js2/api/ironbank';

export const api = Object.freeze({
    cards,
    auth,
    orders,
});
