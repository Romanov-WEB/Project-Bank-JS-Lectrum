export const getCurrencySymbol = (cur) => {
    switch (cur) {
        case 'eur': {
            return '&#128;';
        }
        case 'usd': {
            return '&dollar;';
        }
        case 'uah': {
            return '&#8372;';
        }
        case 'rub': {
            return '&#8381;';
        }
        default: {
            throw new Error(`неизвестная валюта — ${cur}`);
        }
    }
};
